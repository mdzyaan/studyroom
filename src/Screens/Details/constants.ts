/*
 *
 * Details constants
 *
 */

export const DETAILS_START: string = `DETAILS_START`;
export const DETAILS_SUCCESS: string = `DETAILS_SUCCESS`;
export const DETAILS_ERROR: string = `DETAILS_ERROR`;

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