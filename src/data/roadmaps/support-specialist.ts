import type { Edge } from '@xyflow/react';
import type { RoadmapNodeMeta } from './types';

export const nodes: RoadmapNodeMeta[] = [
	{
		id: 'support-tools-setup',
		position: { x: 250, y: 0 },
		guideSlug: 'support-tools-setup',
		skills: ['Helpdesk Software', 'Ticketing Systems', 'Knowledge Base', 'Company Tools', 'Screen Sharing Tools'],
	},
	{
		id: 'customer-communication',
		position: { x: 250, y: 120 },
		skills: ['Tone & Empathy', 'Active Listening', 'Written Communication', 'De-escalation'],
	},
	{
		id: 'ticket-triage-support',
		position: { x: 250, y: 240 },
		skills: ['Severity Levels', 'SLAs', 'Ticket Routing', 'Escalation Paths'],
	},
	{
		id: 'product-knowledge-support',
		position: { x: 250, y: 360 },
		skills: ['Common Issues', 'FAQs', 'Troubleshooting Basics', 'Release Notes'],
	},
	{
		id: 'troubleshooting-diagnostics',
		position: { x: 520, y: 360 },
		optional: true,
		skills: ['Log Reading', 'Reproducing Bugs', 'Root Cause Analysis', 'Browser DevTools'],
	},
	{
		id: 'escalation-collaboration',
		position: { x: 250, y: 480 },
		skills: ['Escalation Etiquette', 'Engineering Handoff', 'Feedback Loops'],
	},
	{
		id: 'customer-satisfaction',
		position: { x: 250, y: 600 },
		skills: ['CSAT', 'Response Time', 'Resolution Time', 'Quality Reviews'],
	},
	{
		id: 'first-solo-shift',
		position: { x: 250, y: 720 },
		skills: ['Independent Ticket Handling', 'Peer Review', 'Documentation', 'Mentorship'],
	},
];

export const edges: Edge[] = [
	{ id: 'e1', source: 'support-tools-setup', target: 'customer-communication' },
	{ id: 'e2', source: 'customer-communication', target: 'ticket-triage-support' },
	{ id: 'e3', source: 'ticket-triage-support', target: 'product-knowledge-support' },
	{ id: 'e4', source: 'product-knowledge-support', target: 'troubleshooting-diagnostics', style: { strokeDasharray: '4 4' } },
	{ id: 'e5', source: 'product-knowledge-support', target: 'escalation-collaboration' },
	{ id: 'e6', source: 'escalation-collaboration', target: 'customer-satisfaction' },
	{ id: 'e7', source: 'customer-satisfaction', target: 'first-solo-shift' },
];
