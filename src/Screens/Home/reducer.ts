/*
 *
 * Home reducer
 *
 */
import produce from 'immer';
import { HOME_START, HOME_SUCCESS, HOME_ERROR, Action } from './constants';

export const initialState = {
  loading: false,
  error: false,
  data: {},
};

const homeReducer  = (state = initialState, action: Action) => {
  return produce(state, draft => {
    switch (action.type) {
      case HOME_START:
        draft.loading = true;
        draft.error = false;
        break;

      case HOME_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.data = action.payload.data;
        break;
      case HOME_ERROR:
        draft.loading = false;
        draft.error = action.payload;
        break;
      default:
        break;
    }
  });
};

export default homeReducer;