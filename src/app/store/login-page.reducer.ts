import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { User } from '../shared/models/user.interface';
import * as LoginPageActions from './login-page.action';

export const initialState: User = {
  mobile: 0,
  password: '',
  loading: false,
};

//creating reducers

export const loginReducer = createReducer(
  initialState,
  on(LoginPageActions.login, (state, { mobile, password, loading }) => ({
    mobile: mobile,
    password: password,
    loading: loading,
  })),
  on(LoginPageActions.logout, (state) => {
    return {
      mobile: 0,
      password: '',
      loading: false,
    };
  }),
  on(LoginPageActions.loading, (state, value) => ({
    mobile: 0,
    password: '',
    loading: value,
  }))
);

export const getLoginState = createFeatureSelector<User>('login');

export const getCurrentLoginState = createSelector(
  getLoginState,
  (state: User) => initialState
);
