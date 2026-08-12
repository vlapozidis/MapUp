import type { Edge } from '@xyflow/react';
import * as dba from './dba';
import * as cloudEngineer from './cloud-engineer';
import * as operationsSpecialist from './operations-specialist';
import * as supportSpecialist from './support-specialist';
import * as qaEngineer from './qa-engineer';
import * as developer from './developer';
import * as salesRep from './sales-rep';
import type { RoadmapNodeMeta } from './types';

export const roadmaps: Record<string, { nodes: RoadmapNodeMeta[]; edges: Edge[] }> = {
	dba: { nodes: dba.nodes, edges: dba.edges },
	'cloud-engineer': { nodes: cloudEngineer.nodes, edges: cloudEngineer.edges },
	'operations-specialist': { nodes: operationsSpecialist.nodes, edges: operationsSpecialist.edges },
	'support-specialist': { nodes: supportSpecialist.nodes, edges: supportSpecialist.edges },
	'qa-engineer': { nodes: qaEngineer.nodes, edges: qaEngineer.edges },
	developer: { nodes: developer.nodes, edges: developer.edges },
	'sales-rep': { nodes: salesRep.nodes, edges: salesRep.edges },
};

export type { RoadmapNodeMeta };
