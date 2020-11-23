// Imports: Dependencies
import { takeLatest } from 'redux-saga/effects';

import { HOME_START } from './constants';
// import { HomeAction } from './actions';

function* fetchhomeData() {
    try {
        console.log('hi');
    } catch (error) {
        console.log(error);
    }
}
// Watcher: Increase Counter Async
export function* homeSaga() {
    // Take Last Action Only
    yield takeLatest(HOME_START, fetchhomeData);
}