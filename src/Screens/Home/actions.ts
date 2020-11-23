/*
 *
 * Home actions
 *
 */

import { HOME_START, HOME_SUCCESS, HOME_ERROR, ActionObject, ActionArr } from './constants';

export const HomeAction: ActionObject = {
  start: (data: ActionArr) => {
    return {
      type: HOME_START,
      payload : data.payload,
      metadata: data.metadata,
    };
  },
  success: (data: ActionArr) => {
    return {
      type: HOME_SUCCESS,
      payload : data.payload,
      metadata: data.metadata,
    };
  },
  error: (data: ActionArr) => {
    return {
      type: HOME_ERROR,
      payload : data.payload,
      metadata: data.metadata,
    };
  },
};
