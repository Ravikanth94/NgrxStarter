import { createReducer, on } from "@ngrx/store";
import { InitialAppState, IAppState } from "./app.state";
import * as AppActions from './app.actions';

export const reducer = createReducer(
    InitialAppState,
    on(AppActions.AppNavigationTabs,(state)=> state)
)