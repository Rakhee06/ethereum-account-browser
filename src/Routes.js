import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SearchBar from "./components/SearchBar";
import TxnList from "./components/TxnList";
import Detail from "./components/Detail";
import BlockList from "./components/BlockList";

const router = () => {
    return (
        <Switch>
            <Route path='/' exact component={ SearchBar } />
            <Route path='/list' components={ TxnList } />
            <Route path='/detail' component={ Detail }/>
            <Route path='/block' component={ BlockList }/>
        </Switch>
    );
};

export default router;
