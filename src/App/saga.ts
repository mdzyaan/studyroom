import * as Effects from 'redux-saga/effects';

const call: any = Effects.call;
const takeLatest: any = Effects.takeLatest;
const put: any = Effects.put;
const select: any = Effects.select;

import { FETCH_CRYPTO_50_START, CryptoArr } from './constants';
import { fetchCryptoAction } from './actions';
import { makeSelectCrypto } from './selectors';
import request from '../utils/request';

function* fetchCryptoTop50(data: CryptoArr) {

    let metadata = data.metadata;
    let timePeriod: string = metadata.timePeriod || '24h';
    let limit: number = metadata.limit || 10;
    let sort: string = metadata.sort || 'coinranking';
    let offset: number = metadata.pageNumber || 0;

    try {
        const response = yield call(request, {
            method: 'get',
            url: `https://api.coinranking.com/v1/public/coins?base=USD&timePeriod=${timePeriod}&limit=${limit}&sort=${sort}&offset=${offset}`,
          });
        let crypto = yield select(makeSelectCrypto());
        yield put(fetchCryptoAction.success({payload: {
            stats: response.data.data.stats,
            coins: [...crypto.coins, ...response.data.data.coins],
        }, metadata: {}}));
    } catch (error) {
        console.log(error);
    }
}

export function* appSaga() {
    yield takeLatest(FETCH_CRYPTO_50_START, fetchCryptoTop50);
}