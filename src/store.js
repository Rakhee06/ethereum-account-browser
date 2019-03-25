import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { rootReducer, rootSaga } from './modules';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

let middleware = applyMiddleware(sagaMiddleware, routerMiddleware(history));

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore( rootReducer(history), composeEnhancers(
    middleware
));

sagaMiddleware.run(rootSaga);
