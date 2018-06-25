import fetch from '../../utils/fetch';

const login = {
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
    async getClinicId() {
      const data = await fetch.get('/login.htmls');
      console.log(data);
      this.setClinicId(data.clinicId);
    },
  },
};

export default login;
