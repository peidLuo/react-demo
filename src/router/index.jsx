import { React } from 'react';
import { Router } from '@reach/router';
import App from '../App';

const list = () => (
  <Router>
    <App path="/" />
  </Router>
);

export default list;
