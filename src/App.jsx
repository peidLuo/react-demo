import React from 'react';
import { Provider, connect } from 'react-redux';
import store from './redux/index';
import PassPort from './components/PassPort';

const mapState = state => ({
  clinicId: state.clinicId,
});

const mapDispatch = ({ clinicId: { getClinicId } }) => ({
  getClinicId: () => getClinicId('/auth.htmls'),
});

const CountContainer = connect(mapState, mapDispatch)(PassPort);

const App = () => (
  <Provider store={store} >
    <CountContainer />
  </Provider>
);

export default App;

