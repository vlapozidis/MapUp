export type RoadmapNodeMeta = {
	id: string;
	position: { x: number; y: number };
	optional?: boolean;
	guideSlug?: string;
	skills?: string[];
};
