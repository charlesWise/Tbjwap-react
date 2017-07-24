import 'core-js/fn/object/assign';
import 'babel-polyfill'; //解决regeneratorRuntime问题

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import routes from './router/router';
import store from './stores/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';

import './config/rem';
import './styles/reset';

const history = syncHistoryWithStore(hashHistory, store);
history.listen(function (location) { return location });

// Render the main component into the dom
ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        { routes }
      </Router>
    </Provider>,
    document.getElementById('app')
);