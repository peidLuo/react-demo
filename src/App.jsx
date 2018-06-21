import React from 'react';
import { Provider, connect } from 'react-redux';
import store from './redux/index';
import PassPort from './components/PassPort';
import List from './router/index';

const mapState = state => ({
  clinicId: state.clinicId,
});

const mapDispatch = ({ clinicId: { getClinicId } }) => ({
  getClinicId: () => getClinicId('/auth.htmls'),
});

const CountContainer = connect(mapState, mapDispatch)(PassPort);

const App = () => (
  <Provider store={store} >
    <div>
      <CountContainer />
    </div>
  </Provider>
);

export default App;

