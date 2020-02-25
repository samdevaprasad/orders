import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducer from './reducers';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';

import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
    return applyMiddleware(myRouterMiddleware, apiMiddleware, thunk);
};

export const store = createStore(
  reducer, composeWithDevTools(getMiddleware()));
