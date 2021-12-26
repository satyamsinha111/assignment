import { createAction, props } from '@ngrx/store';
import { User } from '../shared/models/user.interface';

export const login = createAction('[Login Page] Login', props<User>());
export const logout = createAction('[Login Page] Logout');
export const loading = createAction('SetLoading', props<Boolean>());
