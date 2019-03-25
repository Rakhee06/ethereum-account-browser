import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Detail from "./components/Detail";
import TokenList from "./components/TokenList";
import BlockList from './components/BlockList';
import SearchBarContainer from "./containers/SearchBarContainer";
import TxnListContainer from "./containers/TxnListContainer";

const routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={ SearchBarContainer } />
            <Route path='/txnList' component={ TxnListContainer} />
            <Route path='/detail' component={ Detail }/>
            <Route path='/blockDetail' component={ BlockList } />
            <Route path='/tokenList' component={ TokenList } />
        </Switch>
    );
};

export default routes;
