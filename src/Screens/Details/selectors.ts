import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the details state domain
 */

interface State {
  details: object,
  loading: boolean,
  error: boolean,
}

const selectDetailsDomain = (state: any) => state.details || initialState;

const makeSelectDetailsState = () => createSelector( selectDetailsDomain, (subState: State) => subState);

const makeSelectLoading = () =>
  createSelector(
    selectDetailsDomain,
    (subState: State) => subState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectDetailsDomain,
    (subState: State) => subState.error,
  );

export { makeSelectDetailsState, makeSelectLoading, makeSelectError };