import { all, fork } from 'redux-saga/effects';


import { appSaga } from '../App/saga';

export function* rootSaga() {
    yield all([
        fork(appSaga),
    ]);
};