import { init } from '@rematch/core';
import * as models from './models';

const store = init({
  models,
});

store.subscribe(() => console.log(store.getState()));

export default store;
