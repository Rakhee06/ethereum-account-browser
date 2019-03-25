import { handleAction, combineActions } from 'redux-actions';

import {
    RECEIVE_TXN_LIST,
    RECEIVE_BLOCK_LIST,
    RECEIVE_TOKEN_LIST,
    receiveTxnList,
    receiveBlockList,
    receiveTokenList
} from './actions';

let defaultState = {
    listOfTxn: [],
    listOfBlock: [],
    listOfToken: []

};

export const ui = handleAction(
    combineActions(
        receiveTxnList,
        receiveBlockList,
        receiveTokenList
    ),
    {
        next(state, action) {
            switch ( action.type ) {
                case RECEIVE_TXN_LIST:
                    const newState = {
                        ...state
                    };
                    newState.listOfTxn = action.payload;
                    return newState;

                case RECEIVE_BLOCK_LIST:
                    const newBlockState = {
                        ...state
                    };
                    newBlockState.listOfBlock = action.payload;
                    return newBlockState;

                case RECEIVE_TOKEN_LIST:
                    const newTokenState = {
                        ...state
                    };
                    newTokenState.listOfToken = action.payload;
                    return newTokenState;

                default:
                  return state;
            }
        },
        throw( state, action ) {
            switch ( action.type ) {
                case RECEIVE_TXN_LIST:
                    const newState = {
                        ...state
                    };
                    newState.listOfTxnError = action.payload;
                    return newState;

                case RECEIVE_BLOCK_LIST:
                    const newBlockState = {
                        ...state
                    };
                    newBlockState.listOfBlockError = action.payload;
                    return newBlockState;

                case RECEIVE_TOKEN_LIST:
                    const newTokenState = {
                        ...state
                    };
                    newTokenState.listOfTokenError = action.payload;
                    return newTokenState;

                default:
                    return state;
            }
        }
    },
    defaultState
);
