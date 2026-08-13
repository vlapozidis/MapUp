import { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import {
	ReactFlow,
	Background,
	Controls,
	MarkerType,
	Handle,
	Position,
	type Node,
	type Edge,
	type NodeProps,
	type NodeMouseHandler,
	type NodeChange,
	type ReactFlowInstance,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { translate, translateWithFallback, type Locale } from '../i18n';
import { roadmaps } from '../data/roadmaps';
import { getSkillInfo } from '../data/skillInfo';
import { THEME_COLORS, type Theme } from '../lib/theme';

type Status = 'in-progress' | 'done';

type Props = {
	role: string;
	theme: Theme;
	locale: Locale;
};

const STATUS_COLOR: Record<Status, string> = {
	'in-progress': '#eab308',
	done: '#22c1a4',
};

type RoadmapNodeData = {
	label: string;
	optional?: boolean;
	status?: Status;
	dimmed?: boolean;
	highlighted?: boolean;
	blurred?: boolean;
	hasSkills?: boolean;
	revealed?: boolean;
	theme: Theme;
};

function RoadmapNode({ data }: NodeProps<Node<RoadmapNodeData>>) {
	const { label, optional, status, dimmed, highlighted, blurred, hasSkills, revealed = true, theme } = data;
	const colors = THEME_COLORS[theme];
	const accent = status ? STATUS_COLOR[status] : optional ? colors.optionalBorder : colors.border;
	const baseShadow = theme === 'light' ? '0 1px 2px rgba(15,17,21,0.12)' : '0 1px 2px rgba(0,0,0,0.4)';

	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				gap: 6,
				borderRadius: 2,
				borderWidth: 1,
				borderColor: accent,
				borderStyle: optional && !status ? 'dashed' : 'solid',
				background: colors.nodeBg,
				color: optional && !status ? colors.textDim : colors.text,
				padding: '8px 14px',
				fontSize: 13,
				fontFamily: 'inherit',
				opacity: !revealed ? 0 : dimmed ? 0.3 : blurred ? 0.5 : 1,
				filter: blurred ? 'blur(2px)' : 'none',
				boxShadow: highlighted ? `${baseShadow}, 0 0 0 2px ${accent}55` : baseShadow,
				transform: revealed ? 'scale(1)' : 'scale(0.92)',
				transition: 'opacity 320ms ease, transform 320ms ease, box-shadow 150ms, filter 150ms',
			}}
		>
			<Handle type="target" position={Position.Top} style={{ opacity: 0, pointerEvents: 'none' }} />
			{status === 'done' && <span style={{ color: STATUS_COLOR.done }}>✓</span>}
			{status === 'in-progress' && (
				<span
					style={{
						width: 7,
						height: 7,
						borderRadius: 1,
						background: STATUS_COLOR['in-progress'],
						display: 'inline-block',
					}}
				/>
			)}
			<span>{label}</span>
			<Handle type="source" position={Position.Bottom} style={{ opacity: 0, pointerEvents: 'none' }} />
			{hasSkills && <Handle type="source" id="right" position={Position.Right} style={{ opacity: 0, pointerEvents: 'none' }} />}
		</div>
	);
}

type SubtopicNodeData = {
	label: string;
	done: boolean;
	theme: Theme;
	onToggle: () => void;
};

function SubtopicNode({ data }: NodeProps<Node<SubtopicNodeData>>) {
	const { label, done, theme } = data;
	const palette =
		theme === 'light'
			? { bg: '#fdecd3', border: '#e8b559', text: '#6b4a12' }
			: { bg: '#3a2f1c', border: '#caa053', text: '#e8c98a' };

	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				gap: 8,
				borderRadius: 2,
				border: `1.5px solid ${palette.border}`,
				background: palette.bg,
				color: palette.text,
				padding: '6px 8px 6px 14px',
				fontSize: 12.5,
				fontWeight: 600,
				fontFamily: 'inherit',
				whiteSpace: 'nowrap',
				boxShadow: theme === 'light' ? '0 1px 2px rgba(15,17,21,0.1)' : '0 1px 2px rgba(0,0,0,0.35)',
			}}
		>
			<Handle type="target" id="left" position={Position.Left} style={{ opacity: 0, pointerEvents: 'none' }} />
			<span>{label}</span>
			<button
				onClick={(e) => {
					e.stopPropagation();
					data.onToggle();
				}}
				title={done ? 'Mark as not done' : 'Mark as done'}
				style={{
					width: 18,
					height: 18,
					borderRadius: 2,
					border: `1.5px solid ${done ? '#8b5cf6' : palette.border}`,
					background: done ? '#8b5cf6' : 'transparent',
					color: '#fff',
					fontSize: 11,
					lineHeight: 1,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					cursor: 'pointer',
					padding: 0,
					flexShrink: 0,
				}}
			>
				{done ? '✓' : ''}
			</button>
		</div>
	);
}

const nodeTypes = { roadmap: RoadmapNode, subtopic: SubtopicNode };

function collectReachable(start: string, graph: Map<string, string[]>): Set<string> {
	const seen = new Set<string>();
	const stack = [start];
	while (stack.length) {
		const id = stack.pop()!;
		for (const next of graph.get(id) ?? []) {
			if (!seen.has(next)) {
				seen.add(next);
				stack.push(next);
			}
		}
	}
	return seen;
}

export default function RoadmapFlow({ role, theme, locale }: Props) {
	const { nodes: rawNodes, edges: initialEdges } = roadmaps[role];
	const storageKey = `roadmap-progress-${role}`;
	const keyPrefix = `roadmap.${role}.nodes`;

	const [statusMap, setStatusMap] = useState<Record<string, Status>>({});
	const [selectedId, setSelectedId] = useState<string | null>(null);
	const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
	const [hoveredId, setHoveredId] = useState<string | null>(null);
	const [query, setQuery] = useState('');
	const reactFlowInstance = useRef<ReactFlowInstance<Node<RoadmapNodeData>, Edge> | null>(null);

	// The nodes we pass to <ReactFlow> are fully derived/controlled, with no onNodesChange
	// state to write dimensions back into — so measured sizes (needed by MiniMap) are
	// tracked separately here and merged into each node below.
	const [measured, setMeasured] = useState<Record<string, { width: number; height: number }>>({});
	const onNodesChange = useCallback((changes: NodeChange[]) => {
		setMeasured((prev) => {
			let next = prev;
			for (const change of changes) {
				if (change.type === 'dimensions' && change.dimensions) {
					const existing = next[change.id];
					if (!existing || existing.width !== change.dimensions.width || existing.height !== change.dimensions.height) {
						next = next === prev ? { ...prev } : next;
						next[change.id] = change.dimensions;
					}
				}
			}
			return next;
		});
	}, []);

	useEffect(() => {
		try {
			const raw = window.localStorage.getItem(storageKey);
			if (raw) setStatusMap(JSON.parse(raw));
		} catch {
			// ignore corrupted storage
		}
	}, [storageKey]);

	useEffect(() => {
		window.localStorage.setItem(storageKey, JSON.stringify(statusMap));
	}, [storageKey, statusMap]);

	const t = useCallback((path: string) => translate(locale, path), [locale]);
	const colors = THEME_COLORS[theme];

	const { ancestorsOf, descendantsOf, parentsOf, childrenOf } = useMemo(() => {
		const parents = new Map<string, string[]>();
		const children = new Map<string, string[]>();
		for (const e of initialEdges) {
			if (!children.has(e.source)) children.set(e.source, []);
			children.get(e.source)!.push(e.target);
			if (!parents.has(e.target)) parents.set(e.target, []);
			parents.get(e.target)!.push(e.source);
		}
		const ancestorsOf = new Map<string, Set<string>>();
		const descendantsOf = new Map<string, Set<string>>();
		for (const n of rawNodes) {
			ancestorsOf.set(n.id, collectReachable(n.id, parents));
			descendantsOf.set(n.id, collectReachable(n.id, children));
		}
		return { ancestorsOf, descendantsOf, parentsOf: parents, childrenOf: children };
	}, [rawNodes, initialEdges]);

	// Distance (in edge hops) from the nearest root — drives the staggered "path reveal" on mount.
	const depthOf = useMemo(() => {
		const depth = new Map<string, number>();
		const queue: Array<[string, number]> = rawNodes.filter((n) => !(parentsOf.get(n.id) ?? []).length).map((n) => [n.id, 0]);
		while (queue.length) {
			const [id, d] = queue.shift()!;
			if (depth.has(id)) continue;
			depth.set(id, d);
			for (const child of childrenOf.get(id) ?? []) queue.push([child, d + 1]);
		}
		for (const n of rawNodes) if (!depth.has(n.id)) depth.set(n.id, 0);
		return depth;
	}, [rawNodes, parentsOf, childrenOf]);

	const maxDepth = useMemo(() => Math.max(0, ...Array.from(depthOf.values())), [depthOf]);

	const [revealStep, setRevealStep] = useState(0);
	useEffect(() => {
		if (maxDepth === 0) return;
		let step = 0;
		const interval = setInterval(() => {
			step += 1;
			setRevealStep(step);
			if (step >= maxDepth) clearInterval(interval);
		}, 130);
		return () => clearInterval(interval);
	}, [maxDepth]);

	const labelFor = useCallback(
		(id: string) => translateWithFallback(locale, `${keyPrefix}.${id}.label`, `roadmap.placeholder.nodes.${id}.label`),
		[locale, keyPrefix]
	);
	const descriptionFor = useCallback(
		(id: string) => translateWithFallback(locale, `${keyPrefix}.${id}.description`, `roadmap.placeholder.nodes.${id}.description`),
		[locale, keyPrefix]
	);

	const searching = query.trim().length > 0;
	const matchIds = useMemo(() => {
		if (!searching) return null;
		const q = query.trim().toLowerCase();
		return new Set(
			rawNodes
				.filter(
					(n) =>
						labelFor(n.id).toLowerCase().includes(q) ||
						(n.skills ?? []).some((skill) => skill.toLowerCase().includes(q))
				)
				.map((n) => n.id)
		);
	}, [query, searching, labelFor, rawNodes]);

	const connectedIds = useMemo(() => {
		if (!hoveredId) return null;
		const set = new Set<string>([hoveredId]);
		for (const id of ancestorsOf.get(hoveredId) ?? []) set.add(id);
		for (const id of descendantsOf.get(hoveredId) ?? []) set.add(id);
		return set;
	}, [hoveredId, ancestorsOf, descendantsOf]);

	// Search takes priority over hover when both are active.
	const activeSet = matchIds ?? connectedIds;

	const coreNodes = useMemo(() => rawNodes.filter((n) => !n.optional), [rawNodes]);
	const doneCount = useMemo(() => coreNodes.filter((n) => statusMap[n.id] === 'done').length, [coreNodes, statusMap]);
	const percent = coreNodes.length ? Math.round((doneCount / coreNodes.length) * 100) : 0;

	const [celebrate, setCelebrate] = useState(false);
	const prevPercentRef = useRef(percent);
	useEffect(() => {
		const prev = prevPercentRef.current;
		prevPercentRef.current = percent;
		if (percent === 100 && prev < 100) {
			setCelebrate(true);
			const timer = setTimeout(() => setCelebrate(false), 2200);
			return () => clearTimeout(timer);
		}
	}, [percent]);

	const selectedNodeMeta = selectedId ? rawNodes.find((n) => n.id === selectedId) ?? null : null;
	const expandedSkills = selectedNodeMeta?.skills ?? [];

	const fannedOut = Boolean(selectedNodeMeta && expandedSkills.length > 0);

	const nodes = useMemo<Node<RoadmapNodeData | SubtopicNodeData>[]>(() => {
		const mainNodes: Node<RoadmapNodeData>[] = rawNodes.map((n) => ({
			id: n.id,
			position: n.position,
			type: 'roadmap',
			measured: measured[n.id],
			data: {
				label: labelFor(n.id),
				optional: n.optional,
				status: statusMap[n.id],
				dimmed: activeSet ? !activeSet.has(n.id) : false,
				highlighted: activeSet ? activeSet.has(n.id) : false,
				blurred: fannedOut && n.id !== selectedNodeMeta!.id,
				hasSkills: Boolean(n.skills && n.skills.length > 0),
				revealed: revealStep >= (depthOf.get(n.id) ?? 0),
				theme,
			},
		}));

		if (!selectedNodeMeta || expandedSkills.length === 0) return mainNodes;

		const baseX = selectedNodeMeta.position.x + 260;
		const baseY = selectedNodeMeta.position.y - ((expandedSkills.length - 1) * 42) / 2;
		const skillNodes: Node<SubtopicNodeData>[] = expandedSkills.map((skill, i) => {
			const skillId = `skill::${selectedNodeMeta.id}::${skill}`;
			return {
				id: skillId,
				position: { x: baseX, y: baseY + i * 42 },
				type: 'subtopic',
				measured: measured[skillId],
				data: {
					label: skill,
					done: statusMap[skillId] === 'done',
					theme,
					onToggle: () => {
						setStatusMap((prev) => {
							const next = { ...prev };
							if (next[skillId] === 'done') delete next[skillId];
							else next[skillId] = 'done';
							return next;
						});
					},
				},
			};
		});

		return [...mainNodes, ...skillNodes];
	}, [statusMap, activeSet, labelFor, theme, rawNodes, selectedNodeMeta, expandedSkills, fannedOut, measured, revealStep, depthOf]);

	const edges = useMemo<Edge[]>(() => {
		const mainEdges = initialEdges.map((e) => {
			const active = activeSet ? activeSet.has(e.source) && activeSet.has(e.target) : true;
			const done = statusMap[e.target] === 'done';
			const touchesSelected = selectedNodeMeta && (e.source === selectedNodeMeta.id || e.target === selectedNodeMeta.id);
			const markerColor = done ? STATUS_COLOR.done : colors.border;
			const revealed = revealStep >= (depthOf.get(e.target) ?? 0);
			return {
				...e,
				style: {
					...e.style,
					opacity: !revealed ? 0 : active ? (fannedOut && !touchesSelected ? 0.35 : 1) : 0.15,
					filter: fannedOut && !touchesSelected ? 'blur(2px)' : 'none',
					transition: 'opacity 320ms ease, stroke 150ms, filter 150ms',
					...(done ? { stroke: STATUS_COLOR.done, strokeWidth: 2 } : null),
				},
				markerEnd: { type: MarkerType.ArrowClosed, color: markerColor, width: 16, height: 16 },
				animated: Boolean(connectedIds && connectedIds.has(e.source) && connectedIds.has(e.target)),
			};
		});

		if (!selectedNodeMeta || expandedSkills.length === 0) return mainEdges;

		const skillEdges: Edge[] = expandedSkills.map((skill) => {
			const skillId = `skill::${selectedNodeMeta.id}::${skill}`;
			const done = statusMap[skillId] === 'done';
			return {
				id: `edge-${skillId}`,
				source: selectedNodeMeta.id,
				sourceHandle: 'right',
				target: skillId,
				targetHandle: 'left',
				type: 'default',
				style: {
					stroke: done ? STATUS_COLOR.done : colors.accent,
					strokeWidth: done ? 2 : 1.5,
					strokeDasharray: done ? undefined : '2 4',
					transition: 'stroke 150ms',
				},
			};
		});

		return [...mainEdges, ...skillEdges];
	}, [activeSet, connectedIds, initialEdges, selectedNodeMeta, expandedSkills, colors.accent, colors.border, statusMap, fannedOut, revealStep, depthOf]);

	const selectedMeta = selectedNodeMeta;
	const selectedStatus = selectedId ? statusMap[selectedId] : undefined;

	const selectNode = useCallback((id: string) => {
		setSelectedId(id);
		setSelectedSkill(null);
		reactFlowInstance.current?.fitView({ nodes: [{ id }], duration: 400, maxZoom: 1.2, padding: 1 });
	}, []);
	const onNodeClick = useCallback<NodeMouseHandler>((_, node) => {
		if (node.type === 'subtopic') {
			setSelectedSkill(node.id);
			return;
		}
		selectNode(node.id);
	}, [selectNode]);
	const onPaneClick = useCallback(() => {
		setSelectedId(null);
		setSelectedSkill(null);
		reactFlowInstance.current?.fitView({ duration: 400 });
	}, []);
	const hoverLeaveTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
	const onNodeMouseEnter = useCallback<NodeMouseHandler>((_, node) => {
		clearTimeout(hoverLeaveTimeout.current);
		setHoveredId(node.id);
	}, []);
	const onNodeMouseLeave = useCallback(() => {
		clearTimeout(hoverLeaveTimeout.current);
		hoverLeaveTimeout.current = setTimeout(() => setHoveredId(null), 80);
	}, []);

	// Prefer the neighbor that continues along the same vertical column (the core path)
	// over branches that veer off to optional side-nodes.
	const closestByX = useCallback(
		(candidates: string[] | undefined, fromId: string): string | null => {
			if (!candidates || candidates.length === 0) return null;
			const fromNode = rawNodes.find((n) => n.id === fromId);
			if (!fromNode) return candidates[0];
			return candidates.reduce((best, id) => {
				const node = rawNodes.find((n) => n.id === id);
				if (!node) return best;
				const bestNode = rawNodes.find((n) => n.id === best);
				if (!bestNode) return id;
				return Math.abs(node.position.x - fromNode.position.x) < Math.abs(bestNode.position.x - fromNode.position.x) ? id : best;
			}, candidates[0]);
		},
		[rawNodes]
	);

	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => {
			const target = e.target as HTMLElement | null;
			if (target && ['INPUT', 'TEXTAREA'].includes(target.tagName)) return;

			if (e.key === 'Escape') {
				onPaneClick();
				return;
			}
			if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) return;

			if (!selectedId) {
				const first = rawNodes.find((n) => !(parentsOf.get(n.id) ?? []).length) ?? rawNodes[0];
				if (first) {
					e.preventDefault();
					selectNode(first.id);
				}
				return;
			}

			const next =
				e.key === 'ArrowDown' || e.key === 'ArrowRight'
					? closestByX(childrenOf.get(selectedId), selectedId)
					: closestByX(parentsOf.get(selectedId), selectedId);
			if (next) {
				e.preventDefault();
				selectNode(next);
			}
		};
		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, [selectedId, rawNodes, parentsOf, childrenOf, closestByX, selectNode, onPaneClick]);

	const setStatus = (status: Status | undefined) => {
		if (!selectedId) return;
		setStatusMap((prev) => {
			const next = { ...prev };
			if (status) next[selectedId] = status;
			else delete next[selectedId];
			return next;
		});
	};

	const [undoSnapshot, setUndoSnapshot] = useState<Record<string, Status> | null>(null);
	const undoTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
	const resetProgress = () => {
		setUndoSnapshot(statusMap);
		setStatusMap({});
		clearTimeout(undoTimeout.current);
		undoTimeout.current = setTimeout(() => setUndoSnapshot(null), 6000);
	};
	const undoReset = () => {
		if (undoSnapshot) setStatusMap(undoSnapshot);
		setUndoSnapshot(null);
		clearTimeout(undoTimeout.current);
	};

	const ringRadius = 15;
	const ringCircumference = 2 * Math.PI * ringRadius;

	return (
		<div style={{ display: 'flex', height: '100%', width: '100%' }}>
			<style>{`
				@keyframes roadmap-confetti-fall {
					0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
					100% { transform: translateY(140px) rotate(540deg); opacity: 0; }
				}
				@keyframes roadmap-ring-pop {
					0%, 100% { transform: scale(1); }
					30% { transform: scale(1.18); }
				}
			`}</style>
			<div style={{ flex: 1, background: colors.canvasBg, position: 'relative' }}>
				<div
					style={{
						position: 'absolute',
						top: 12,
						right: 12,
						zIndex: 5,
						display: 'flex',
						alignItems: 'center',
						gap: 8,
						background: colors.nodeBg,
						border: `1px solid ${colors.border}`,
						borderRadius: 2,
						padding: '6px 10px',
						boxShadow: theme === 'light' ? '0 1px 2px rgba(15,17,21,0.12)' : '0 1px 2px rgba(0,0,0,0.4)',
						animation: celebrate ? 'roadmap-ring-pop 0.6s ease-in-out' : 'none',
					}}
				>
					<svg width="36" height="36" viewBox="0 0 36 36" style={{ flexShrink: 0 }}>
						<circle cx="18" cy="18" r={ringRadius} fill="none" stroke={colors.border} strokeWidth="3" />
						<circle
							cx="18"
							cy="18"
							r={ringRadius}
							fill="none"
							stroke={percent === 100 ? STATUS_COLOR.done : colors.accent}
							strokeWidth="3"
							strokeLinecap="round"
							strokeDasharray={ringCircumference}
							strokeDashoffset={ringCircumference * (1 - percent / 100)}
							transform="rotate(-90 18 18)"
							style={{ transition: 'stroke-dashoffset 400ms ease, stroke 400ms' }}
						/>
					</svg>
					<div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
						<span style={{ fontSize: 12.5, fontWeight: 700, color: percent === 100 ? STATUS_COLOR.done : colors.text }}>
							{percent}%
						</span>
						<span style={{ fontSize: 10.5, color: colors.textDim }}>{t('roadmap.progress.label')}</span>
					</div>
					{Object.keys(statusMap).length > 0 && (
						<button
							onClick={resetProgress}
							title={t('roadmap.progress.reset')}
							style={{
								background: 'none',
								border: 'none',
								color: colors.textDim,
								cursor: 'pointer',
								padding: 4,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
								<path d="M3 12a9 9 0 1 0 2.64-6.36" />
								<polyline points="3 4 3 10 9 10" />
							</svg>
						</button>
					)}
					{celebrate && (
						<div style={{ position: 'absolute', inset: 0, overflow: 'visible', pointerEvents: 'none' }}>
							{Array.from({ length: 14 }).map((_, i) => {
								const colorsList = [STATUS_COLOR.done, colors.accent, '#eab308', '#8b5cf6'];
								return (
									<span
										key={i}
										style={{
											position: 'absolute',
											top: 4,
											left: `${8 + (i * 90) / 14}%`,
											width: 5,
											height: 5,
											borderRadius: 1,
											background: colorsList[i % colorsList.length],
											animation: `roadmap-confetti-fall ${0.9 + (i % 4) * 0.15}s ease-in ${(i % 5) * 0.05}s forwards`,
										}}
									/>
								);
							})}
						</div>
					)}
				</div>
				<div style={{ position: 'absolute', top: 12, left: 12, zIndex: 5 }}>
					<svg
						width="13"
						height="13"
						viewBox="0 0 24 24"
						fill="none"
						stroke={colors.textDim}
						strokeWidth="2.5"
						strokeLinecap="round"
						strokeLinejoin="round"
						style={{ position: 'absolute', top: '50%', left: 9, transform: 'translateY(-50%)', pointerEvents: 'none' }}
					>
						<circle cx="11" cy="11" r="8" />
						<line x1="21" y1="21" x2="16.65" y2="16.65" />
					</svg>
					<input
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder={t('roadmap.searchPlaceholder')}
						style={{
							background: colors.nodeBg,
							border: `1px solid ${colors.border}`,
							borderRadius: 2,
							color: colors.text,
							padding: '6px 10px 6px 28px',
							fontSize: 13,
							width: 200,
						}}
					/>
				</div>
				<ReactFlow
					nodes={nodes}
					edges={edges}
					nodeTypes={nodeTypes}
					onNodesChange={onNodesChange}
					onNodeClick={onNodeClick}
					onNodeMouseEnter={onNodeMouseEnter}
					onNodeMouseLeave={onNodeMouseLeave}
					onPaneClick={onPaneClick}
					onInit={(instance) => {
						reactFlowInstance.current = instance;
					}}
					nodesConnectable={false}
					fitView
					proOptions={{ hideAttribution: true }}
				>
					<Background color={colors.backgroundDots} gap={20} />
					<Controls showInteractive={false} />
				</ReactFlow>
				<div
					style={{
						position: 'absolute',
						bottom: 12,
						right: 12,
						zIndex: 5,
						pointerEvents: 'none',
						background: colors.nodeBg,
						border: `1px solid ${colors.border}`,
						borderRadius: 2,
						padding: '8px 10px',
						fontSize: 11,
						color: colors.textDim,
						boxShadow: theme === 'light' ? '0 1px 2px rgba(15,17,21,0.12)' : '0 1px 2px rgba(0,0,0,0.4)',
					}}
				>
					<div style={{ fontWeight: 700, color: colors.text, marginBottom: 4, fontSize: 11 }}>{t('roadmap.legend.title')}</div>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
						<span style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
							<span style={{ width: 16, height: 0, borderTop: `2px solid ${colors.border}` }} />
							{t('roadmap.legend.core')}
						</span>
						<span style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
							<span style={{ width: 16, height: 0, borderTop: `2px dashed ${colors.optionalBorder}` }} />
							{t('roadmap.legend.optional')}
						</span>
						<span style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
							<span style={{ width: 16, height: 0, borderTop: `2px solid ${STATUS_COLOR['in-progress']}` }} />
							{t('roadmap.legend.inProgress')}
						</span>
						<span style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
							<span style={{ width: 16, height: 0, borderTop: `2px solid ${STATUS_COLOR.done}` }} />
							{t('roadmap.legend.done')}
						</span>
					</div>
				</div>
				{undoSnapshot && (
					<div
						style={{
							position: 'absolute',
							bottom: 16,
							left: '50%',
							transform: 'translateX(-50%)',
							zIndex: 6,
							display: 'flex',
							alignItems: 'center',
							gap: 10,
							background: colors.nodeBg,
							border: `1px solid ${colors.border}`,
							borderRadius: 2,
							padding: '8px 12px',
							fontSize: 12.5,
							color: colors.text,
							boxShadow: theme === 'light' ? '0 2px 6px rgba(15,17,21,0.16)' : '0 2px 6px rgba(0,0,0,0.5)',
						}}
					>
						<span>{t('roadmap.progress.resetToast')}</span>
						<button
							onClick={undoReset}
							style={{
								background: 'none',
								border: 'none',
								color: colors.accent,
								fontWeight: 700,
								fontSize: 12.5,
								cursor: 'pointer',
								padding: 0,
							}}
						>
							{t('roadmap.progress.undo')}
						</button>
					</div>
				)}
			</div>
			<aside
				style={{
					width: 280,
					borderLeft: `1px solid ${colors.border}`,
					padding: '1.5rem',
					background: colors.panelBg,
					color: colors.text,
					fontFamily: 'inherit',
				}}
			>
				{selectedSkill && selectedMeta ? (
					(() => {
						const skillLabel = selectedSkill.split('::')[2];
						const skillDone = statusMap[selectedSkill] === 'done';
						const explanation = getSkillInfo(skillLabel, locale);
						return (
							<>
								<button
									onClick={() => setSelectedSkill(null)}
									style={{
										background: 'none',
										border: 'none',
										color: colors.accent,
										fontSize: 12.5,
										fontWeight: 600,
										cursor: 'pointer',
										padding: 0,
										marginBottom: 12,
									}}
								>
									← {labelFor(selectedMeta.id)}
								</button>
								<h3 style={{ marginTop: 0 }}>{skillLabel}</h3>
								{explanation ? (
									explanation
										.split('\n\n')
										.filter(Boolean)
										.map((paragraph, i) => (
											<p key={i} style={{ color: colors.textDim, fontSize: 14, lineHeight: 1.5 }}>
												{paragraph}
											</p>
										))
								) : (
									<p style={{ color: colors.textDim, fontSize: 14, lineHeight: 1.5 }}>
										{t('roadmap.sidebar.skillIntro')} <strong>{labelFor(selectedMeta.id)}</strong>.
									</p>
								)}
								<button
									onClick={() => {
										setStatusMap((prev) => {
											const next = { ...prev };
											if (skillDone) delete next[selectedSkill];
											else next[selectedSkill] = 'done';
											return next;
										});
									}}
									style={{
										width: '100%',
										padding: '8px 10px',
										fontSize: 12.5,
										borderRadius: 2,
										border: `1px solid ${skillDone ? STATUS_COLOR.done : colors.border}`,
										background: skillDone ? `${STATUS_COLOR.done}22` : 'transparent',
										color: skillDone ? STATUS_COLOR.done : colors.textDim,
										cursor: 'pointer',
										marginTop: '0.5rem',
									}}
								>
									{skillDone ? `✓ ${t('roadmap.sidebar.done')}` : t('roadmap.sidebar.markSkillDone')}
								</button>
							</>
						);
					})()
				) : (
					<>
						<h3 style={{ marginTop: 0 }}>{selectedMeta ? labelFor(selectedMeta.id) : t('roadmap.sidebar.defaultTitle')}</h3>
						{(selectedMeta ? descriptionFor(selectedMeta.id) : t('roadmap.sidebar.defaultDescription'))
							.split('\n\n')
							.filter(Boolean)
							.map((paragraph, i) => (
								<p key={i} style={{ color: colors.textDim, fontSize: 14, lineHeight: 1.5 }}>
									{paragraph}
								</p>
							))}
						{selectedMeta && (
							<>
								{selectedMeta.skills && selectedMeta.skills.length > 0 && (
									<div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '0.75rem 0' }}>
										{selectedMeta.skills.map((skill) => (
											<span
												key={skill}
												onClick={() => setSelectedSkill(`skill::${selectedMeta.id}::${skill}`)}
												style={{
													display: 'inline-block',
													padding: '3px 10px',
													borderRadius: 2,
													fontSize: 11.5,
													fontWeight: 600,
													background:
														statusMap[`skill::${selectedMeta.id}::${skill}`] === 'done'
															? `${STATUS_COLOR.done}22`
															: `${colors.accent}1a`,
													color: statusMap[`skill::${selectedMeta.id}::${skill}`] === 'done' ? STATUS_COLOR.done : colors.accent,
													border: `1px solid ${colors.accent}40`,
													cursor: 'pointer',
												}}
											>
												{statusMap[`skill::${selectedMeta.id}::${skill}`] === 'done' ? '✓ ' : ''}
												{skill}
											</span>
										))}
									</div>
								)}
								<div style={{ display: 'flex', gap: 6, margin: '1rem 0' }}>
									{(['in-progress', 'done'] as Status[]).map((s) => (
										<button
											key={s}
											onClick={() => setStatus(selectedStatus === s ? undefined : s)}
											style={{
												flex: 1,
												padding: '6px 8px',
												fontSize: 12,
												borderRadius: 2,
												border: `1px solid ${selectedStatus === s ? STATUS_COLOR[s] : colors.border}`,
												background: selectedStatus === s ? `${STATUS_COLOR[s]}22` : 'transparent',
												color: selectedStatus === s ? STATUS_COLOR[s] : colors.textDim,
												cursor: 'pointer',
											}}
										>
											{s === 'done' ? `✓ ${t('roadmap.sidebar.done')}` : `● ${t('roadmap.sidebar.inProgress')}`}
										</button>
									))}
								</div>
								{selectedMeta.guideSlug && (
									<a
										href={`${import.meta.env.BASE_URL}/guides/${selectedMeta.guideSlug}`}
										style={{
											display: 'inline-block',
											color: colors.accent,
											fontSize: 13,
											fontWeight: 600,
											textDecoration: 'none',
										}}
									>
										{t('roadmap.sidebar.openGuide')}
									</a>
								)}
							</>
						)}
					</>
				)}
			</aside>
		</div>
	);
}
