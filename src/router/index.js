/**
 * Created by chenrunsheng on 2017/7/21.
 */
import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import App from '../views/app';

const Home = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../views/home').default)
  },'Home')
};
const Invest = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../views/invest').default)
  },'Invest')
};


const routes = (
  <Route path="/" component={ App }>
    <IndexRedirect from="/" to='/home'/>
    <IndexRoute component={ Home } />
    <Route path="/home" getComponent={ Home }></Route>
    <Route path="/invest" getComponent={ Invest }></Route>
  </Route>
);
export default routes;