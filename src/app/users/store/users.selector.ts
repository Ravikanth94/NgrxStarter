import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserFeatureState } from './users.state';

export const featureSelectorKey = 'Users';
const featureSelector =
  createFeatureSelector<UserFeatureState>(featureSelectorKey);

export const usersSelector = createSelector(
  featureSelector,
  (state) => {
    //console.log("u state",state);
    return state;
  }
);
