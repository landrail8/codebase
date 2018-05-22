import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import createHistory from 'history/createBrowserHistory'

import { Switch } from 'react-router-dom';

import { Route } from 'react-router';

import ContactPage from './pages/contact/contact';
import TreePage from './pages/home/home';
import ErrorPage from './pages/error/index';

const store = configureStore();
const history = createHistory();

ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                {/* {routes} */}

                <Route component={ TreePage } path ='/' exact={true} />
                <Route component={ ContactPage } path ='/contact' />
                <Route component={ ErrorPage } path ='*' />

            </Switch>
        </Router>
    </Provider>
),
document.querySelector('#container'));