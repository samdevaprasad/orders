import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import itemReducers from './reducers/itemReducers';
import userReducers from './reducers/userReducers';

export default combineReducers({
  itemReducers,
  userReducers,
  router: routerReducer
});
