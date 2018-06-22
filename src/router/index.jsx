import React from 'react';
import { Router } from '@reach/router';
import PassPort from '../components/PassPort';
import NotFound from '../views/NotFound';

const router = () => (
  <Router>
    <PassPort path="/" />
    <NotFound default />
  </Router>
);

export default router;
