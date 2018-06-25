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
      if (payload.authType) {
        const data = await fetch.get('/auth', Object.assign(payload, { authType: 2 }));
        try {
          const json = JSON.parse(await data.text());
          if (!json.successful) {
            alert(json.message);
            return;
          }
        } catch (e) {
          console.log(e);
        }
      }
      this.getClinicId();
    },
    async getClinicId() {
      const data = await fetch.get('/login.htmls');
      const json = JSON.parse(await data.text());
      if (json.clinicId === -1) {
        alert('登录失败');
      } else {
        this.setClinicId(json.clinicId);
      }
    },
  },
};

export default clinicId;
