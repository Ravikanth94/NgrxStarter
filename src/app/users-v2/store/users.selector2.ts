import { createFeatureSelector, createSelector } from "@ngrx/store";
import { adapter } from "./users.reducers2";
import {State} from './users.state2'

export const { selectAll, selectEntities, selectIds, selectTotal } = adapter.getSelectors();

export const selectUserState = createFeatureSelector<State>('UsersV2');

export const getSelectedUserId = (state: State) => state.selectedId;

export const selectEntitiesSelector = createSelector(selectUserState, selectEntities);
export const selectAllUsersSelector = createSelector(selectUserState, selectAll);
export const selectCurrentUserId = createSelector(
    selectUserState,
    getSelectedUserId
  );

  export const selectUserIds = createSelector(
    selectUserState,
    selectIds // shorthand for usersState => fromUser.selectUserIds(usersState)
  );



