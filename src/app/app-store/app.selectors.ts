import { createSelector } from "@ngrx/store";
import { IAppState, ITab } from "./app.state";


export const tabsSelector = (store: IAppState)=> store.tabs;

export const getTabSelector = createSelector(tabsSelector, (state: ITab[])=> state);