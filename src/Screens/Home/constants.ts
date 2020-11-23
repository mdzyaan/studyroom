/*
 *
 * Home constants
 *
 */

export const HOME_START: string = `HOME_START`;
export const HOME_SUCCESS: string = `HOME_SUCCESS`;
export const HOME_ERROR: string = `HOME_ERROR`;

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