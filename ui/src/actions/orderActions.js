import { RSAA, createAction } from 'redux-api-middleware';
import { localHost } from '../constants';

export const retrieveOrders = () => {
  return {
    [RSAA]: {
      endpoint: `${localHost}/orders`,
      method: 'GET',
      types: [`REQUEST_ORDERS`, `SUCCESS_ORDERS`, `FAILURE_ORDERS`]
    }
  }
}

export const uploadOrder = (itemId, userId) => {
  return createAction({
    headers: {
        'Content-Type': 'application/json'
    },
    endpoint: `${localHost}/upload-order?itemId=${itemId}&userId=${userId}`,
    method: 'POST',
    types: [`REQUEST_POST_ORDER`, `SUCCESS_POST_ORDER`, `FAILURE_POST_ORDER`]
  });
}

