import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import { reducer } from '../reducer/reducer';

import App from '../components/app';
import PageNotFound from '../components/page-not-found';

const Router = () => { 
    return (
        <Provider store={ createStore( reducer, {
            cityHistoric: [],
            datacity: [],
            currentCityDisplay: {}
        }
        )}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ App } />
                    <Route component={ PageNotFound } />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default Router;