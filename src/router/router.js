/**
 * Created by chenrunsheng on 2017/7/21.
 */
import React from 'react';
import { Route, IndexRedirect} from 'react-router';
import App from '../pages/app';

const Home = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../pages/home/index').default)
  },'Home')
};

const routes = (
  <Route>
    <Route path="/" component={App}>
      <IndexRedirect from="/" to='/home'/>
    </Route>
    <Route path="/home" getComponent={ Home }></Route>
  </Route>
);
export default routes;