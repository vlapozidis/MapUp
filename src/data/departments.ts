export const departments = [
	{ id: 'operations' },
	{ id: 'sales' },
	{ id: 'development' },
	{ id: 'qa' },
] as const;

export type DepartmentId = (typeof departments)[number]['id'];
