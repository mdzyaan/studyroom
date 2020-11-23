/*
 *
 * App constants
 *
 */

export const APP_START: string = `APP_START`;
export const APP_SUCCESS: string = `APP_SUCCESS`;
export const APP_ERROR: string = `APP_ERROR`;

export const FETCH_CRYPTO_50_START: string = `FETCH_CRYPTO_50_START`;
export const FETCH_CRYPTO_50_SUCCESS: string = `FETCH_CRYPTO_50_SUCCESS`;
export const FETCH_CRYPTO_50_ERROR: string = `FETCH_CRYPTO_50_ERROR`;

export interface Action {
    type: string,
    payload: any,
    metadata: any,
  }

export interface ActionArr {
    payload: object,
    metadata: object,
}

export interface ActionObject {
  start: (data: ActionArr) => Action,
  success: (data: ActionArr) => Action,
  error: (data: ActionArr) => Action,
}

export interface Crypto {
  payload: object,
  metadata: any,
}

export type CryptoArr = Crypto | ActionArr;

export interface Props {
  fetchCryptoAStart: (data: CryptoArr) => Action
}