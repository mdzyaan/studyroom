/*
 *
 * Details actions
 *
 */

import { DETAILS_START, DETAILS_SUCCESS, DETAILS_ERROR, ActionObject, ActionArr } from './constants';

export const DetailsAction: ActionObject = {
  start: (data: ActionArr) => {
    return {
      type: DETAILS_START,
      payload : data.payload,
      metadata: data.metadata,
    };
  },
  success: (data: ActionArr) => {
    return {
      type: DETAILS_SUCCESS,
      payload : data.payload,
      metadata: data.metadata,
    };
  },
  error: (data: ActionArr) => {
    return {
      type: DETAILS_ERROR,
      payload : data.payload,
      metadata: data.metadata,
    };
  },
};
