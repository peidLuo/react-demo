import React from 'react';
import { Router } from '@reach/router';
import Main from '../layout/main';
import NotFound from '../views/NotFound';
import Index from '../views/login/index';
import Dot from '../components/DotList';
import Counter from '../views/counter/index';
import Servers from '../views/servers/index';
import Setting from '../views/setting/index';

const router = () => (
  <Router>
    <Main path="/">
      <Dot path="/" />
      <Counter path="counter" />
      <Servers path="servers" />
      <Setting path="setting" />
    </Main>
    <Index path="login" />
    <NotFound default />
  </Router>
);

export default router;
