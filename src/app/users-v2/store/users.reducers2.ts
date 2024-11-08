import {EntityAdapter,createEntityAdapter} from '@ngrx/entity';
import { IUser } from './users.state';
import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { UsersActions } from './index'


export function selectUserId(a: IUser): number {
    //In this case this would be optional since primary key is id
    return a.id;
  }

export const adapter:EntityAdapter<IUser> = createEntityAdapter<IUser>({
    selectId: selectUserId,
  });

export const initialState = adapter.getInitialState(()=>{
    selectedId : null
});

export const reducer = createReducer(initialState,
    on(UsersActions.GetUsersAPISuccess, (state, successCallbackProps)=>{
        return adapter.setAll(successCallbackProps.list, state)
    }),
    on(UsersActions.UpdateUserByIdSuccess, (state, successCallbackProps)=>{
        debugger;
        return adapter.updateOne(successCallbackProps.user, state);
    })
);