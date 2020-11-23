import { takeLatest } from 'redux-saga/effects';

import { DETAILS_START } from './constants';

function* fetchdetailsData() {
    try {
        console.log('hi');
    } catch (error) {
        console.log(error);
    }
}

export function* detailsSaga() {
    yield takeLatest(DETAILS_START, fetchdetailsData);
}