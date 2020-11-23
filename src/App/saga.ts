import * as Effects from "redux-saga/effects";

const call: any = Effects.call;
const takeLatest: any = Effects.takeLatest;
const put: any = Effects.put;

import { FETCH_CRYPTO_50_START } from './constants';
import { fetchCrypto50Action } from './actions';
import request from '../utils/request';

function* fetchCryptoTop50() {
    // console.log("Saga",data) // arg data: Crypto50Arr

    // let metadata = data.metadata;
    // let timePeriod: string = metadata.timePeriod || '24h';
    // let limit: number = metadata.limit || 50;
    // let sort: string = metadata.sort || 'coinranking';
    try {
        const response = yield call(request, {
            method: 'get',
            url: `https://api.coinranking.com/v1/public/coins?base=USD&timePeriod=24h&limit=100&sort=coinranking`,
            // url: `https://api.coinranking.com/v1/public/coins?base=INR&timePeriod=${timePeriod}&limit=${limit}&sort=${sort}`,
          });
        yield put(fetchCrypto50Action.success({payload: {
            stats: response.data.data.stats,
            coins: response.data.data.coins,
        }, metadata: {}}));
    } catch (error) {
        console.log(error);
    }
}

export function* appSaga() {
    yield takeLatest(FETCH_CRYPTO_50_START, fetchCryptoTop50);
}