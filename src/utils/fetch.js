import { stringify } from 'querystring';
import 'whatwg-fetch';
import BASE from './config';

export default {
  async get(path, data) {
    return fetch(`${BASE}${path}?${stringify(data)}`);
  },
  async post(path, data) {
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    return fetch(`${BASE}${path}`, option);
  },
};
