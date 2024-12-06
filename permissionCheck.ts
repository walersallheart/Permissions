import { User } from './interfaces/user.interface';
import { ROLES } from './constants/roles.constants';
import { ACTION } from './constants/actions.constants';

export function hasPermission(user: User, permission: ACTION): boolean {
	return user.roles.some(role =>
		ROLES[role].includes(permission)
	);
}
