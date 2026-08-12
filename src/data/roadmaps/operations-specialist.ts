import type { Edge } from '@xyflow/react';
import type { RoadmapNodeMeta } from './types';

export const nodes: RoadmapNodeMeta[] = [
	{
		id: 'company-tools-setup',
		position: { x: 250, y: 0 },
		skills: ['Email & Calendar', 'Team Chat', 'Intranet', 'Single Sign-On'],
	},
	{
		id: 'itsm-basics',
		position: { x: 250, y: 120 },
		skills: ['Ticketing Systems', 'SLAs', 'ITIL Basics', 'Change Management'],
	},
	{
		id: 'incident-management',
		position: { x: 250, y: 240 },
		skills: ['Triage', 'Escalation Paths', 'Root Cause Analysis', 'Postmortems'],
	},
	{
		id: 'scripting-automation',
		position: { x: 520, y: 240 },
		optional: true,
		skills: ['PowerShell', 'Bash', 'Scheduled Tasks', 'Automation Basics'],
	},
	{
		id: 'monitoring-alerting',
		position: { x: 250, y: 360 },
		skills: ['Dashboards', 'Alert Thresholds', 'On-call Rotations', 'Runbooks'],
	},
	{
		id: 'documentation',
		position: { x: 250, y: 480 },
		skills: ['Knowledge Base', 'SOPs', 'Process Mapping', 'Wiki Maintenance'],
	},
	{
		id: 'communication-escalation',
		position: { x: 250, y: 600 },
		skills: ['Stakeholder Updates', 'Status Reporting', 'Escalation Etiquette'],
	},
	{
		id: 'continuous-improvement',
		position: { x: 250, y: 720 },
		skills: ['Metrics & KPIs', 'Retrospectives', 'Process Optimization'],
	},
];

export const edges: Edge[] = [
	{ id: 'e1', source: 'company-tools-setup', target: 'itsm-basics' },
	{ id: 'e2', source: 'itsm-basics', target: 'incident-management' },
	{ id: 'e3', source: 'incident-management', target: 'scripting-automation', style: { strokeDasharray: '4 4' } },
	{ id: 'e4', source: 'incident-management', target: 'monitoring-alerting' },
	{ id: 'e5', source: 'monitoring-alerting', target: 'documentation' },
	{ id: 'e6', source: 'documentation', target: 'communication-escalation' },
	{ id: 'e7', source: 'communication-escalation', target: 'continuous-improvement' },
];
