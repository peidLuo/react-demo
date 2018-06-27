import { message } from 'antd';
import { navigate } from '@reach/router';
import fetch from '../../utils/fetch';

const user = {
  state: [], // initial state
  reducers: {
    // handle state changes with pure functions
    setUser: (state, payload) => payload,
  },
  effects: {
    // handle state changes with impure functions.
    // use async/await for async actions
    async getUser(payload) {
      const data = await fetch.get('/Login.htmls', payload);
      const str = await data.text();
      try {
        const start = str.indexOf('id="left"');
        if (start === -1) {
          navigate('/login');
          return;
        }
        const end = str.indexOf('id="main"');
        const div = str.slice(start - 5, end - 5);

        const el = document.createElement('div');
        el.innerHTML = div;
        const firstMenu = Array.from(el.querySelectorAll('.master-menu-nav  span')).map(item => item.innerHTML);
        // const secondMenu = Array.from(el.querySelectorAll('.master-menu-nav  span'))
        // .map(item => item.innerHTML);
        this.setUser(firstMenu);
        message.success('登录成功！');
      } catch (e) {
        message.error('登录失败！');
      }
    },
  },
};

export default user;
