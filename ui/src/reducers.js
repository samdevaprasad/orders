import { combineReducers } from 'redux';
import userReducers from './reducers/userReducers';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  userReducers,
  router: routerReducer
});
