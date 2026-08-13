import type { Edge } from '@xyflow/react';
import type { RoadmapNodeMeta } from './types';

export const nodes: RoadmapNodeMeta[] = [
	{
		id: 'tools-setup',
		position: { x: 250, y: -120 },
		guideSlug: 'qa-engineer-tools-setup',
		skills: ['IDE Setup', 'Postman', 'Browser DevTools'],
	},
	{
		id: 'qa-fundamentals',
		position: { x: 250, y: 0 },
		skills: ['Testing Basics', 'SDLC', 'Bug Lifecycle', 'Test Case Design'],
	},
	{
		id: 'manual-testing',
		position: { x: 250, y: 120 },
		skills: ['Test Plans', 'Exploratory Testing', 'Regression Testing', 'Test Reporting', 'Browser DevTools'],
	},
	{
		id: 'bug-tracking',
		position: { x: 250, y: 240 },
		skills: ['Jira', 'Bug Triage', 'Reproduction Steps', 'Severity vs Priority', 'Written Communication'],
	},
	{
		id: 'api-testing',
		position: { x: 250, y: 360 },
		skills: ['REST APIs', 'Postman', 'Status Codes', 'Request Validation'],
	},
	{
		id: 'automation-fundamentals',
		position: { x: 520, y: 240 },
		optional: true,
		skills: ['Selenium', 'Test Scripts', 'Locators', 'Assertions'],
	},
	{
		id: 'performance-testing',
		position: { x: 520, y: 480 },
		optional: true,
		skills: ['Load Testing', 'JMeter', 'Bottleneck Analysis'],
	},
	{
		id: 'cicd-for-qa',
		position: { x: 250, y: 480 },
		skills: ['Continuous Integration', 'Test Pipelines', 'Smoke Tests', 'Test Coverage'],
	},
	{
		id: 'first-qa-rotation',
		position: { x: 250, y: 600 },
		skills: ['Test Case Reviews', 'Release Sign-off', 'Documentation', 'Mentorship'],
	},
];

export const edges: Edge[] = [
	{ id: 'e0', source: 'tools-setup', target: 'qa-fundamentals' },
	{ id: 'e1', source: 'qa-fundamentals', target: 'manual-testing' },
	{ id: 'e2', source: 'manual-testing', target: 'bug-tracking' },
	{ id: 'e3', source: 'bug-tracking', target: 'api-testing' },
	{ id: 'e4', source: 'bug-tracking', target: 'automation-fundamentals', style: { strokeDasharray: '4 4' } },
	{ id: 'e5', source: 'api-testing', target: 'performance-testing', style: { strokeDasharray: '4 4' } },
	{ id: 'e6', source: 'api-testing', target: 'cicd-for-qa' },
	{ id: 'e7', source: 'cicd-for-qa', target: 'first-qa-rotation' },
];
