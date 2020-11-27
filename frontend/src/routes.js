import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Language from './pages/Language/';
import Beleza from './pages/Beleza/';
import Header from './components/Header';
import Btc from './pages/Btc';
import ProdutosBeleza from './pages/ProdutosBeleza';
import Users from './pages/Users'

export default function Routes() {
    return (
        
        <BrowserRouter>
            <Header />

            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/1" exact component={Language} />
                <Route path="/2" exact component={Beleza} />
                <Route path="/3" exact component={Btc} />
                <Route path="/4" exact component={ProdutosBeleza} />
                <Route path="/5" exact component={Users} />
            </Switch>
        </BrowserRouter>
    )
}