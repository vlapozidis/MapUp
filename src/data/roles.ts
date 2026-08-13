import type { DepartmentId } from './departments';

export const roles = [
	{ id: 'dba', department: 'operations' },
	{ id: 'cloud-engineer', department: 'operations' },
	{ id: 'operations-specialist', department: 'operations' },
	{ id: 'support-specialist', department: 'support' },
	{ id: 'qa-engineer', department: 'qa' },
	{ id: 'developer', department: 'development' },
	{ id: 'sales-rep', department: 'sales' },
] as const satisfies { id: string; department: DepartmentId }[];

export type RoleId = (typeof roles)[number]['id'];

export function rolesForDepartment(departmentId: string) {
	return roles.filter((r) => r.department === departmentId);
}
