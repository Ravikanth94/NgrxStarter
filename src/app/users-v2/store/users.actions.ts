import { createAction, props } from '@ngrx/store';
import { IUser } from './users.state';

export const InvokeUsersGetAPI = createAction('[USERS] INVOKE_GET_API_V2');
export const GetUsersAPISuccess = createAction(
  '[USERS] GET_API_SUCCESS_V2',
  props<{ list: IUser[]; isLoading: boolean; error: string }>()
);
export const GetUsersAPIFailure = createAction(
  '[USERS] GET_API_FAILURE_V2',
  props<{ list: IUser[]; isLoading: boolean; error: string }>()
);

export const InvokeGetUserByIdAPI = createAction(
  '[USERS] INVOKE_GET_BY_ID_API_V2',
  props<{ id: number }>()
);
export const GetUserByIdAPISuccess = createAction(
  '[USERS] GET_BY_ID_SUCCESS_V2',
  props<{ user: IUser; isLoading: boolean; error: string }>()
);

export const GetUserByIdAPIFailure = createAction(
  '[USERS] GET_BY_ID_FAILURE_V2',
  props<{ user: IUser; isLoading: boolean; error: string }>()
);

export const InvokeUpdateUserAPI = createAction(
  '[USERS] INVOKE_UPDATE_USER_APIv',
  props<{ user: IUser }>()
);

export const UpdateUserByIdSuccess = createAction(
  '[USERS] UPDATE_USER_SUCCESSv',
  props<{ user: IUser; isLoading: boolean; error: string }>()
);

export const UpdateUserByIdFailure = createAction(
  '[USERS] UPDATE_USER_FAILURE_V2',
  props<{ user: IUser; isLoading: boolean; error: string }>()
);

export const InvokeAddUserAPI = createAction(
  '[USERS] INVOKE_ADD_USER_API_V2',
  props<{ user: IUser }>()
);

export const AddNewUserSuccess = createAction(
  '[USERS] ADD_USER_SUCCESS_V2',
  props<{ user: IUser; isLoading: boolean; error: string }>()
);

export const AddNewUserFailure = createAction(
  '[USERS] ADD_USER_FAILURE_V2',
  props<{ user: IUser; isLoading: boolean; error: string }>()
);
