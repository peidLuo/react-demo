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
    async getClinicId(payload) {
      const data = await fetch.get(payload);
      console.log(data);
      this.setClinicId(1);
    },
  },
};

export default clinicId;
