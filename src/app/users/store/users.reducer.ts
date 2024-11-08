import { createReducer, on } from '@ngrx/store';
import { UsersInitialState } from './users.state';
import * as UsersActions from './users.actions';

export const reducer = createReducer(
  UsersInitialState,
  on(UsersActions.GetUsersAPISuccess, (state, successCallbackState) => {
    return {...state, ...successCallbackState};
  }),
  on(UsersActions.GetUsersAPIFailure, (state, failedCallbackState) => {
    //make use of error
    return {...state, ...failedCallbackState};
  }),
  on(UsersActions.UpdateUserByIdSuccess, (state, successCallbackState) => {
    const newList = state.list.map(item => {
        if(item.id === successCallbackState.user.id){
           return successCallbackState.user
        }
        else{
            return item
        }
    });
    //console.log("update user by id",state);
    return {...state, list: newList};
  }),
  on(UsersActions.UpdateUserByIdFailure, (state, failedCallbackState) => {
    //make use of error
    return {...state,...failedCallbackState};
  }),
  on(UsersActions.AddNewUserSuccess, (state, successCallbackState) => {
    return {...state, ...successCallbackState};
  }),
  on(UsersActions.AddNewUserFailure, (state, failedCallbackState) => {
    //make use of error
    return {...state, ...failedCallbackState};
  })
);
