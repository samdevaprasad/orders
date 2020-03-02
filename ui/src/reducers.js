import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import itemReducers from './reducers/itemReducers';
import orderReducers from './reducers/orderReducers';
import userReducers from './reducers/userReducers';

export default combineReducers({
  itemReducers,
  orderReducers,
  userReducers,
  router: routerReducer
});
