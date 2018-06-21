import fetch from '../../utils/fetch';

const login = {
  state: 0, // initial state
  reducers: {
    // handle state changes with pure functions
    setClinicId(state, payload) {
      return state + payload;
    },
  },
  effects: {
    // handle state changes with impure functions.
    // use async/await for async actions
    async getClinicId(payload) {
      const data = await fetch.get(payload);
      this.setClinicId(data.clinicId);
    },
  },
};

export default login;
