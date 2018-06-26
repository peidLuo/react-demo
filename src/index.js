import React from 'react';
import { render } from 'react-dom';
import 'promise-polyfill/src/polyfill';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './assets/css/common.less';

render(<App />, document.getElementById('root'));

registerServiceWorker();
