/*
 *
 * Details reducer
 *
 */
import produce from 'immer';
import { DETAILS_START, DETAILS_SUCCESS, DETAILS_ERROR, Action } from './constants';

export const initialState = {
  loading: false,
  error: false,
  data: {},
};

const detailsReducer  = (state = initialState, action: Action) => {
  return produce(state, draft => {
    switch (action.type) {
      case DETAILS_START:
        draft.loading = true;
        draft.error = false;
        break;

      case DETAILS_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.data = action.payload.data;
        break;
      case DETAILS_ERROR:
        draft.loading = false;
        draft.error = action.payload;
        break;
      default:
        break;
    }
  });
};

export default detailsReducer;