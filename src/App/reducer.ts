/*
 *
 * App reducer
 *
 */
import produce from 'immer';
import {
  APP_START,
  APP_SUCCESS,
  APP_ERROR,
  Action,
  FETCH_CRYPTO_50_START,
  FETCH_CRYPTO_50_SUCCESS,
  FETCH_CRYPTO_50_ERROR,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  data: {},
  crypto: {
    loading: false,
    error: false,
    stats: {
      total24hVolume: 0,
      totalMarketCap: 0,
    },
    coins: [],
  },
};

const appReducer  = (state = initialState, action: Action) => {
  return produce(state, draft => {
    switch (action.type) {
      case APP_START:
        draft.loading = true;
        draft.error = false;
        break;

      case APP_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.data = action.payload.data;
        break;
      case APP_ERROR:
        draft.loading = false;
        draft.error = action.payload;
        break;
      case FETCH_CRYPTO_50_START:
        draft.crypto.loading = true;
        draft.crypto.error = false;
        break;

      case FETCH_CRYPTO_50_SUCCESS:
        draft.crypto.loading = false;
        draft.crypto.error = false;
        draft.crypto.stats = action.payload.stats;
        draft.crypto.coins = action.payload.coins;
        break;
      case FETCH_CRYPTO_50_ERROR:
        draft.crypto.loading = false;
        draft.crypto.error = action.payload;
        break;
      default:
        break;
    }
  });
};

export default appReducer;