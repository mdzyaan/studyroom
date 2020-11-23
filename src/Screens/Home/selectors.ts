import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the home state domain
 */

interface State {
  home: object,
  loading: boolean,
  error: boolean,
}

const selectHomeDomain = (state: any) => state.home || initialState;

const makeSelectHomeState = () => createSelector( selectHomeDomain, (subState: State) => subState);

/**
 * Other specific selectors
 */

const makeSelectLoading = () =>
  createSelector(
    selectHomeDomain,
    (subState: State) => subState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectHomeDomain,
    (subState: State) => subState.error,
  );

export { makeSelectHomeState, makeSelectLoading, makeSelectError };