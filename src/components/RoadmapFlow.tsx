import { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import {
	ReactFlow,
	Background,
	Controls,
	Handle,
	Position,
	type Node,
	type Edge,
	type NodeProps,
	type NodeMouseHandler,
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
	theme: Theme;
};

function RoadmapNode({ data }: NodeProps<Node<RoadmapNodeData>>) {
	const { label, optional, status, dimmed, highlighted, blurred, hasSkills, theme } = data;
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
				opacity: dimmed ? 0.3 : blurred ? 0.5 : 1,
				filter: blurred ? 'blur(2px)' : 'none',
				boxShadow: highlighted ? `${baseShadow}, 0 0 0 2px ${accent}55` : baseShadow,
				transition: 'opacity 150ms, box-shadow 150ms, filter 150ms',
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

	const { ancestorsOf, descendantsOf } = useMemo(() => {
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
		return { ancestorsOf, descendantsOf };
	}, [rawNodes, initialEdges]);

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

	const selectedNodeMeta = selectedId ? rawNodes.find((n) => n.id === selectedId) ?? null : null;
	const expandedSkills = selectedNodeMeta?.skills ?? [];

	const fannedOut = Boolean(selectedNodeMeta && expandedSkills.length > 0);

	const nodes = useMemo<Node<RoadmapNodeData | SubtopicNodeData>[]>(() => {
		const mainNodes: Node<RoadmapNodeData>[] = rawNodes.map((n) => ({
			id: n.id,
			position: n.position,
			type: 'roadmap',
			data: {
				label: labelFor(n.id),
				optional: n.optional,
				status: statusMap[n.id],
				dimmed: activeSet ? !activeSet.has(n.id) : false,
				highlighted: activeSet ? activeSet.has(n.id) : false,
				blurred: fannedOut && n.id !== selectedNodeMeta!.id,
				hasSkills: Boolean(n.skills && n.skills.length > 0),
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
	}, [statusMap, activeSet, labelFor, theme, rawNodes, selectedNodeMeta, expandedSkills, fannedOut]);

	const edges = useMemo<Edge[]>(() => {
		const mainEdges = initialEdges.map((e) => {
			const active = activeSet ? activeSet.has(e.source) && activeSet.has(e.target) : true;
			const done = statusMap[e.target] === 'done';
			const touchesSelected = selectedNodeMeta && (e.source === selectedNodeMeta.id || e.target === selectedNodeMeta.id);
			return {
				...e,
				style: {
					...e.style,
					opacity: active ? (fannedOut && !touchesSelected ? 0.35 : 1) : 0.15,
					filter: fannedOut && !touchesSelected ? 'blur(2px)' : 'none',
					transition: 'opacity 150ms, stroke 150ms, filter 150ms',
					...(done ? { stroke: STATUS_COLOR.done, strokeWidth: 2 } : null),
				},
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
	}, [activeSet, connectedIds, initialEdges, selectedNodeMeta, expandedSkills, colors.accent, statusMap, fannedOut]);

	const selectedMeta = selectedNodeMeta;
	const selectedStatus = selectedId ? statusMap[selectedId] : undefined;

	const onNodeClick = useCallback<NodeMouseHandler>((_, node) => {
		if (node.type === 'subtopic') {
			setSelectedSkill(node.id);
			return;
		}
		setSelectedId(node.id);
		setSelectedSkill(null);
		reactFlowInstance.current?.fitView({ nodes: [{ id: node.id }], duration: 400, maxZoom: 1.2, padding: 1 });
	}, []);
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

	const setStatus = (status: Status | undefined) => {
		if (!selectedId) return;
		setStatusMap((prev) => {
			const next = { ...prev };
			if (status) next[selectedId] = status;
			else delete next[selectedId];
			return next;
		});
	};

	return (
		<div style={{ display: 'flex', height: '100%', width: '100%' }}>
			<div style={{ flex: 1, background: colors.canvasBg, position: 'relative' }}>
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
					<Controls />
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
								<p style={{ color: colors.textDim, fontSize: 14, lineHeight: 1.5 }}>
									{explanation || (
										<>
											{t('roadmap.sidebar.skillIntro')} <strong>{labelFor(selectedMeta.id)}</strong>.
										</>
									)}
								</p>
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
						<p style={{ color: colors.textDim, fontSize: 14, lineHeight: 1.5 }}>
							{selectedMeta ? descriptionFor(selectedMeta.id) : t('roadmap.sidebar.defaultDescription')}
						</p>
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
