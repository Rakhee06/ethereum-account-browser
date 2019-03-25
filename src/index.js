import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'

import './index.css';
import App from './App';
import routes from './Routes';
import store, { history } from './store';

const app =
    <Provider store={store}>
        <ConnectedRouter history={history} routes={routes}>
            <App/>
        </ConnectedRouter>
    </Provider>;

ReactDOM.render(app, document.getElementById('root'));

