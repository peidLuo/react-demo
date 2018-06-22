import React from 'react';
import { render } from 'react-dom';
import 'promise-polyfill/src/polyfill';
import './assets/css/common.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

render(<App />, document.getElementById('root'));

registerServiceWorker();
