import { takeLatest, call, put } from 'redux-saga/effects';

import {
    getTokenList,
    getBlockList,
    getTxnList
} from './api';
import {
    REQUEST_TXN_LIST,
    REQUEST_BLOCK_LIST,
    REQUEST_TOKEN_LIST,
    receiveTxnList,
    receiveBlockList,
    receiveTokenList,
    requestApiSuccess,
    receiveApiFailure
} from './actions';

/**
 *
 * @param action
 * @returns {IterableIterator<*>} Returns the data from the API call for transaction list
 */

function* callRequestTxnList(action) {
    try {
        const results = yield call(getTxnList, action.payload);
        yield put(receiveTxnList(results));
        yield put(requestApiSuccess(results));
    }
    catch(error) {
        yield put(receiveApiFailure(error));
    }
}

export function* requestTxnListSaga() {
    yield takeLatest(REQUEST_TXN_LIST, callRequestTxnList)
}

/**
 *
 * @param action
 * @returns {IterableIterator<*>} Returns the data from the API call for block details
 */

function* callRequestBlockList(action) {
    try {
        const results = yield call(getBlockList, action.payload);
        yield put(receiveBlockList(results));
        yield put(requestApiSuccess(results));
    }
    catch(error) {
        yield put(receiveApiFailure(error));
    }
}

export function* requestBlockListSaga() {
    yield takeLatest(REQUEST_BLOCK_LIST, callRequestBlockList)
}

/**
 *
 * @param action
 * @returns {IterableIterator<*>} Returns the data from the API call for token list
 */
function* callRequestTokenList(action) {
    try {
        const results = yield call(getTokenList, action.payload);
        yield put(receiveTokenList(results));
        yield put(requestApiSuccess(results));
    }
    catch(error){
        yield put(receiveApiFailure(error));
    }
}

export function* requestTokenListSaga() {
    yield takeLatest(REQUEST_TOKEN_LIST, callRequestTokenList)
}
