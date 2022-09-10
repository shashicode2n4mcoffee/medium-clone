import { createAction, props } from '@ngrx/store';
import { ActionTyps } from './actionTypes';

export const registerAction = createAction(
  ActionTyps.REGISTER_REQUEST,
  props<{ username: string; password: string; email: string }>()
);
