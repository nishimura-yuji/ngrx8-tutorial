import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State, todoFeatureKey } from './todo.reducer';

/**
 * Selectors
 */
const getState = createFeatureSelector<State>(todoFeatureKey);

export const getLoading = createSelector(
  getState,
  state => state.loading
);

export const getTodos = createSelector(
  getState,
  state => state.todos
);
