import type { Edge } from '@xyflow/react';
import type { RoadmapNodeMeta } from './types';

export const nodes: RoadmapNodeMeta[] = [
	{ id: 'ms-learn-setup', position: { x: 250, y: 0 }, guideSlug: 'ms-learn-setup' },
	{
		id: 'az-900',
		position: { x: 250, y: 120 },
		guideSlug: 'az-900',
		skills: ['IaaS', 'PaaS', 'SaaS', 'Cloud Economics', 'Azure Portal'],
	},
	{
		id: 'dp-900',
		position: { x: 250, y: 240 },
		guideSlug: 'dp-900',
		skills: ['Relational Data', 'Non-relational Data', 'SQL Basics', 'Azure SQL', 'Cosmos DB'],
	},
	{
		id: 'tsql-fundamentals',
		position: { x: 250, y: 360 },
		skills: ['T-SQL', 'Joins', 'Indexes', 'Stored Procedures', 'Query Tuning'],
	},
	{
		id: 'dp-300',
		position: { x: 250, y: 480 },
		guideSlug: 'dp-300',
		skills: ['Performance Tuning', 'Security & RBAC', 'Backups', 'HADR', 'Maintenance Plans'],
	},
	{ id: 'intro-videos', position: { x: 520, y: 60 }, optional: true, guideSlug: 'intro-videos' },
	{ id: 'video-platforms', position: { x: 520, y: 480 }, optional: true, guideSlug: 'video-platforms' },
	{
		id: 'hands-on',
		position: { x: 250, y: 600 },
		guideSlug: 'hands-on',
		skills: ['Virtual Machines', 'SQL Server', 'SSMS', 'Networking Basics', 'Sandbox Environments'],
	},
	{
		id: 'first-rotation',
		position: { x: 250, y: 720 },
		skills: ['Ticket Triage', 'Peer Review', 'Documentation', 'Mentorship'],
	},
];

export const edges: Edge[] = [
	{ id: 'e1', source: 'ms-learn-setup', target: 'az-900' },
	{ id: 'e2', source: 'az-900', target: 'dp-900' },
	{ id: 'e3', source: 'dp-900', target: 'tsql-fundamentals' },
	{ id: 'e4', source: 'tsql-fundamentals', target: 'dp-300' },
	{ id: 'e5', source: 'ms-learn-setup', target: 'intro-videos', style: { strokeDasharray: '4 4' } },
	{ id: 'e6', source: 'dp-300', target: 'video-platforms', style: { strokeDasharray: '4 4' } },
	{ id: 'e7', source: 'dp-300', target: 'hands-on' },
	{ id: 'e8', source: 'hands-on', target: 'first-rotation' },
];
