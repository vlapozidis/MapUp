import type { Edge } from '@xyflow/react';
import type { RoadmapNodeMeta } from './types';

export const nodes: RoadmapNodeMeta[] = [
	{
		id: 'cloud-fundamentals',
		position: { x: 250, y: 0 },
		skills: ['IaaS', 'PaaS', 'SaaS', 'Cloud Economics'],
	},
	{
		id: 'networking',
		position: { x: 250, y: 120 },
		skills: ['VNets', 'Subnets', 'VPN Gateways', 'Load Balancers', 'DNS'],
	},
	{
		id: 'compute-storage',
		position: { x: 250, y: 240 },
		skills: ['Virtual Machines', 'Blob Storage', 'Managed Disks', 'Autoscaling'],
	},
	{
		id: 'security-fundamentals',
		position: { x: 520, y: 240 },
		optional: true,
		skills: ['IAM', 'RBAC', 'Key Vault', 'Zero Trust'],
	},
	{
		id: 'iac',
		position: { x: 250, y: 360 },
		skills: ['ARM Templates', 'Bicep', 'Terraform', 'GitOps'],
	},
	{
		id: 'containers',
		position: { x: 250, y: 480 },
		skills: ['Docker', 'AKS', 'Helm', 'Pods & Services'],
	},
	{
		id: 'cicd',
		position: { x: 250, y: 600 },
		skills: ['Azure DevOps', 'GitHub Actions', 'Release Pipelines', 'Automated Testing'],
	},
	{
		id: 'monitoring-cost',
		position: { x: 250, y: 720 },
		skills: ['Azure Monitor', 'Log Analytics', 'Cost Management', 'Alerts'],
	},
	{
		id: 'az-104',
		position: { x: 250, y: 840 },
		skills: ['Resource Governance', 'Identity Management', 'Azure Administration'],
	},
];

export const edges: Edge[] = [
	{ id: 'e1', source: 'cloud-fundamentals', target: 'networking' },
	{ id: 'e2', source: 'networking', target: 'compute-storage' },
	{ id: 'e3', source: 'compute-storage', target: 'security-fundamentals', style: { strokeDasharray: '4 4' } },
	{ id: 'e4', source: 'compute-storage', target: 'iac' },
	{ id: 'e5', source: 'iac', target: 'containers' },
	{ id: 'e6', source: 'containers', target: 'cicd' },
	{ id: 'e7', source: 'cicd', target: 'monitoring-cost' },
	{ id: 'e8', source: 'monitoring-cost', target: 'az-104' },
];
