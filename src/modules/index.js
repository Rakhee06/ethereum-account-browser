import { combineReducers } from 'redux';
import { connectRouter  } from 'connected-react-router';
import { fork, all } from 'redux-saga/effects';

import { ui } from './ui/reducers';
import * as uiSagas from './ui/sagas';

export const rootReducer = (history) => combineReducers({
    ui,
    router: connectRouter(history)
});


//function generator (creates small functions and yields back the result of each one of them)
// returns an array of function through fork
export  function* rootSaga() {
    yield all([
        ...Object.values(uiSagas),
    ].map(fork));
}