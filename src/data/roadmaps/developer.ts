import type { Edge } from '@xyflow/react';
import type { RoadmapNodeMeta } from './types';

export const nodes: RoadmapNodeMeta[] = [
	{
		id: 'dev-environment-setup',
		position: { x: 250, y: 0 },
		skills: ['Git', 'IDE Setup', 'Package Managers', 'Local Servers'],
	},
	{
		id: 'programming-fundamentals',
		position: { x: 250, y: 120 },
		skills: ['Variables & Types', 'Control Flow', 'Functions', 'Debugging'],
	},
	{
		id: 'web-fundamentals',
		position: { x: 250, y: 240 },
		skills: ['HTML', 'CSS', 'JavaScript', 'DOM'],
	},
	{
		id: 'backend-basics',
		position: { x: 250, y: 360 },
		skills: ['APIs', 'Databases', 'Authentication', 'Environment Variables'],
	},
	{
		id: 'testing-code-quality',
		position: { x: 520, y: 360 },
		optional: true,
		skills: ['Unit Testing', 'Code Review', 'Linting', 'Refactoring'],
	},
	{
		id: 'version-control-workflows',
		position: { x: 250, y: 480 },
		skills: ['Branching', 'Pull Requests', 'Merge Conflicts', 'Code Review Etiquette'],
	},
	{
		id: 'cicd-deployment',
		position: { x: 250, y: 600 },
		skills: ['Build Pipelines', 'Deployment', 'Feature Flags', 'Rollbacks'],
	},
	{
		id: 'first-feature-ship',
		position: { x: 250, y: 720 },
		skills: ['Ticket Breakdown', 'Pair Programming', 'Documentation', 'Mentorship'],
	},
];

export const edges: Edge[] = [
	{ id: 'e1', source: 'dev-environment-setup', target: 'programming-fundamentals' },
	{ id: 'e2', source: 'programming-fundamentals', target: 'web-fundamentals' },
	{ id: 'e3', source: 'web-fundamentals', target: 'backend-basics' },
	{ id: 'e4', source: 'backend-basics', target: 'testing-code-quality', style: { strokeDasharray: '4 4' } },
	{ id: 'e5', source: 'backend-basics', target: 'version-control-workflows' },
	{ id: 'e6', source: 'version-control-workflows', target: 'cicd-deployment' },
	{ id: 'e7', source: 'cicd-deployment', target: 'first-feature-ship' },
];
