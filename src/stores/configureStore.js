/**
 * Created by chenrunsheng on 2017/7/21.
 */
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import {routerMiddleware} from 'react-router-redux';
import { hashHistory } from 'react-router'

const loggerMiddleware = createLogger();
const reduxRouterMiddleware = routerMiddleware(hashHistory);

 function configure(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
        reduxRouterMiddleware
      )
    )
  )
}
const store = configure();
export default store;