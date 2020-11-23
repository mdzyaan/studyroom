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

interface Crypto {
  crypto: {
    stats: any,
    coin: any,
  }
}

const selectAppDomain = (state: any) => state.app || initialState;

const makeSelectAppState = () => createSelector( selectAppDomain, (subState: IntitialState) => subState);

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

const makeSelectCrypto = () =>
  createSelector(
    selectAppDomain,
    (subState: Crypto) => subState.crypto,
  );

export { makeSelectAppState, makeSelectLoading, makeSelectError, makeSelectCrypto };