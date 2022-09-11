import { createAction, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { ActionTyps } from './actionTypes';

export const registerAction = createAction(
  ActionTyps.REGISTER_REQUEST,
  props<{ request: RegisterRequestInterface }>()
);
