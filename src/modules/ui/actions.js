import { createAction } from 'redux-actions';


export const REQUEST_TXN_LIST = 'REQUEST_TXN_LIST';
export const RECEIVE_TXN_LIST = 'RECEIVE_TXN_LIST';

export const requestTxnList = createAction(REQUEST_TXN_LIST);
export const receiveTxnList = createAction(RECEIVE_TXN_LIST);


export const REQUEST_BLOCK_LIST = 'REQUEST_BLOCK_LIST';
export const RECEIVE_BLOCK_LIST = 'RECEIVE_BLOCK_LIST';

export const requestBlockList = createAction(REQUEST_BLOCK_LIST);
export const receiveBlockList = createAction(RECEIVE_BLOCK_LIST);


export const REQUEST_TOKEN_LIST = 'REQUEST_TOKEN_LIST';
export const RECEIVE_TOKEN_LIST = 'RECEIVE_TOKEN_LIST';

export const requestTokenList = createAction(REQUEST_TOKEN_LIST);
export const receiveTokenList = createAction(RECEIVE_TOKEN_LIST);

export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const RECEIVE_API_FAILURE = 'RECEIVE_API_FAILURE';

export const requestApiSuccess = createAction(REQUEST_API_SUCCESS);
export const receiveApiFailure = createAction(RECEIVE_API_FAILURE);

