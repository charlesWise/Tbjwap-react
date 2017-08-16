/**
 * Created by chenrunsheng on 2017/7/21.
 */
import React from 'react';
import { Route } from 'react-router';
import App from '../views/app';

const Home = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../views/home').default)
  }, 'Home')
};
const Invest = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../views/invest').default)
  }, 'Invest')
};
const Account = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../views/account').default)
  }, 'Account')
};
const Login = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../views/login').default)
  }, 'Login')
};

const routes = (
  <Route path="/" component={App}>
    <Route path="/home" getComponent={Home}></Route>
    <Route path="/invest" getComponent={Invest}></Route>
    <Route path="/account" getComponent={Account}></Route>
    <Route path="/login" getComponent={Login}></Route>
  </Route>
);
export default routes;