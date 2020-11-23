import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the app state domain
 */

interface IntitialState {
  app: object,
  loading: boolean,
  error: boolean,
}


interface Crypto50 {
  crypto50: {
    stats: any,
    coin: [],
  }
}

type State = IntitialState | Crypto50;

const selectAppDomain = (state: any) => state.app || initialState;

const makeSelectAppState = () => createSelector( selectAppDomain, (subState: State) => subState);

/**
 * Other specific selectors
 */

const makeSelectLoading = () =>
  createSelector(
    selectAppDomain,
    (subState: IntitialState) => subState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectAppDomain,
    (subState: IntitialState) => subState.error,
  );

const makeSelectCrypto50 = () =>
  createSelector(
    selectAppDomain,
    (subState: Crypto50) => subState.crypto50,
  );

export { makeSelectAppState, makeSelectLoading, makeSelectError,makeSelectCrypto50 };