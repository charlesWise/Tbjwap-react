import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './router';
import store from './stores/configureStore';
import './config/rem';
import 'styles/reset.scss';

const history = syncHistoryWithStore(hashHistory, store);
history.listen(function (location) { return location });

// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app')
);