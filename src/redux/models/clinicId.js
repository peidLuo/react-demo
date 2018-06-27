import { message } from 'antd';
import fetch from '../../utils/fetch';

const clinicId = {
  state: 0, // initial state
  reducers: {
    // handle state changes with pure functions
    setClinicId(state, payload) {
      return payload;
    },
  },
  effects: {
    // handle state changes with impure functions.
    // use async/await for async actions
    async getAuth(payload) {
      if (payload.authUserName) {
        const data = await fetch.get('/auth', Object.assign(payload, { authType: 2 }));
        try {
          const json = JSON.parse(await data.text());
          if (!json.successful) {
            message.error(json.message);
            return;
          }
        } catch (e) {
          message.error('授权失败！');
        }
      }
      this.getClinicId();
    },
    async getClinicId() {
      const data = await fetch.get('/login.htmls');
      try {
        const json = await data.json();
        if (json.clinicId === '-1') {
          message.error('请先授权登录');
        } else {
          message.success('管理员已授权！');
        }
        this.setClinicId(json.clinicId);
      } catch (e) {
        message.error('请先授权登录');
        this.setClinicId('-1');
      }
    },
  },
};

export default clinicId;
