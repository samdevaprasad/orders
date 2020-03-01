import { combineReducers } from 'redux';
import userReducers from './reducers/userReducers';
import itemReducers from './reducers/itemReducers';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  itemReducers,
  userReducers,
  router: routerReducer
});
