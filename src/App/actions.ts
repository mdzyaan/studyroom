/*
 *
 * App actions
 *
 */

import {
  APP_START,
  APP_SUCCESS,
  APP_ERROR,
  FETCH_CRYPTO_50_START,
  FETCH_CRYPTO_50_SUCCESS,
  FETCH_CRYPTO_50_ERROR,
  ActionObject,
  ActionArr,
  Crypto50Arr } from './constants';

export const AppAction: ActionObject = {
  start: (data: ActionArr) => {
    return {
      type: APP_START,
      payload : data.payload,
      metadata: data.metadata,
    };
  },
  success: (data: ActionArr) => {
    return {
      type: APP_SUCCESS,
      payload : data.payload,
      metadata: data.metadata,
    };
  },
  error: (data: ActionArr) => {
    return {
      type: APP_ERROR,
      payload : data.payload,
      metadata: data.metadata,
    };
  },
};

export const fetchCrypto50Action: ActionObject = {
  start: (data: Crypto50Arr) => {
    console.log("action start")
    return {
      type: FETCH_CRYPTO_50_START,
      payload : data.payload,
      metadata: data.metadata,
    };
  },
  success: (data: ActionArr) => {
    return {
      type: FETCH_CRYPTO_50_SUCCESS,
      payload : data.payload,
      metadata: data.metadata,
    };
  },
  error: (data: ActionArr) => {
    return {
      type: FETCH_CRYPTO_50_ERROR,
      payload : data.payload,
      metadata: data.metadata,
    };
  },
};
