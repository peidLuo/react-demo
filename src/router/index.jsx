import React from 'react';
import { Router } from '@reach/router';
import Main from '../layout/main';
import NotFound from '../views/NotFound';
import Index from '../views/login/index';

const router = () => (
  <Router>
    <Main path="/" />
    <Index path="login" />
    <NotFound default />
  </Router>
);

export default router;
