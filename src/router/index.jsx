import React from 'react';
import { Router, Redirect } from '@reach/router';
import Main from '../layout/main';
import NotFound from '../views/NotFound';
import Index from '../views/login/index';
import asyncComponent from '../utils/AsyncComponent';
import Order from '../views/counter/order';

const AsyncSetting = asyncComponent(() => import('../views/setting/index'));
const AsyncCounter = asyncComponent(() => import('../views/counter/index'));

const router = () => (
  <Router>
    <Redirect from="/" to="/counter" />
    <Main path="/">
      <AsyncCounter path="counter">
        <Order path="order" />
      </AsyncCounter>
      <AsyncSetting path="setting" />
      <NotFound default />
    </Main>
    <Index path="login" />
    <NotFound default />
  </Router>
);

export default router;
