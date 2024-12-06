import { ACTION } from './constants/actions.constants';
import { User } from './interfaces/user.interface';
import { hasPermission } from './permissionCheck';

const user: User = { id: '1', roles: ['user'] };

// Can create a comment
hasPermission(user, ACTION.CREATE_COMMENTS);

// Can view all comments
hasPermission(user, ACTION.VIEW_COMMENTS);

// Can view OMS so show it in the menu
hasPermission(user, ACTION.VIEW_OMS);