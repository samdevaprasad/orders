import { createAction } from 'redux-api-middleware';
import { localHost } from '../constants';

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