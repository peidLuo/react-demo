import React from 'react';
import { Router } from '@reach/router';
import PassPort from '../components/PassPort';

const router = () => (
  <Router>
    <PassPort path="/" />
  </Router>
);

export default router;
