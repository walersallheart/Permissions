import { USER_ROLES } from '../interfaces/user-roles.interface';
import { ACTION } from './actions.constants';

export const ROLES: USER_ROLES = {
	admin: [
		ACTION.VIEW_COMMENTS,
		ACTION.CREATE_COMMENTS,
		ACTION.UPDATE_COMMENTS,
		ACTION.DELETE_COMMENTS,
		ACTION.VIEW_OMS,
	],
	moderator: [
		ACTION.VIEW_COMMENTS,
		ACTION.CREATE_COMMENTS,
		ACTION.DELETE_COMMENTS,
		ACTION.VIEW_OMS,
	],
	user: [
        ACTION.VIEW_COMMENTS, 
        ACTION.CREATE_COMMENTS,
		ACTION.VIEW_OMS,
    ],
};
