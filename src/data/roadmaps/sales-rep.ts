import type { Edge } from '@xyflow/react';
import type { RoadmapNodeMeta } from './types';

export const nodes: RoadmapNodeMeta[] = [
	{
		id: 'tools-setup',
		position: { x: 250, y: -120 },
		guideSlug: 'sales-rep-tools-setup',
		skills: ['Company Tools', 'CRM Basics', 'Dialer Software'],
	},
	{
		id: 'product-onboarding',
		position: { x: 250, y: 0 },
		skills: ['Product Knowledge', 'Value Proposition', 'Target Market', 'Company Tools'],
	},
	{
		id: 'crm-fundamentals',
		position: { x: 250, y: 120 },
		skills: ['CRM Basics', 'Pipeline Stages', 'Lead Scoring', 'Data Hygiene'],
	},
	{
		id: 'prospecting',
		position: { x: 250, y: 240 },
		skills: ['Cold Outreach', 'Lead Qualification', 'Email Sequences', 'LinkedIn Outreach', 'Dialer Software'],
	},
	{
		id: 'sales-calls-demos',
		position: { x: 250, y: 360 },
		skills: ['Discovery Calls', 'Product Demos', 'Objection Handling', 'Active Listening'],
	},
	{
		id: 'negotiation-closing',
		position: { x: 520, y: 360 },
		optional: true,
		skills: ['Pricing Strategy', 'Negotiation Tactics', 'Closing Techniques'],
	},
	{
		id: 'account-management',
		position: { x: 250, y: 480 },
		skills: ['Renewals', 'Customer Success Handoff', 'Follow-ups', 'Retention'],
	},
	{
		id: 'sales-metrics',
		position: { x: 250, y: 600 },
		skills: ['KPIs', 'Quota Tracking', 'Forecasting', 'Win/Loss Analysis'],
	},
	{
		id: 'first-deal-closed',
		position: { x: 250, y: 720 },
		skills: ['Deal Strategy', 'Cross-team Collaboration', 'Documentation', 'Mentorship'],
	},
];

export const edges: Edge[] = [
	{ id: 'e0', source: 'tools-setup', target: 'product-onboarding' },
	{ id: 'e1', source: 'product-onboarding', target: 'crm-fundamentals' },
	{ id: 'e2', source: 'crm-fundamentals', target: 'prospecting' },
	{ id: 'e3', source: 'prospecting', target: 'sales-calls-demos' },
	{ id: 'e4', source: 'sales-calls-demos', target: 'negotiation-closing', style: { strokeDasharray: '4 4' } },
	{ id: 'e5', source: 'sales-calls-demos', target: 'account-management' },
	{ id: 'e6', source: 'account-management', target: 'sales-metrics' },
	{ id: 'e7', source: 'sales-metrics', target: 'first-deal-closed' },
];
