import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from './reducers';

const ConfigureStore = createStore(reducers, applyMiddleware(thunkMiddleware));

export default ConfigureStore;
