import { RSAA, createAction } from 'redux-api-middleware';
import { localHost } from '../constants';

export const retrieveAllItems = () => {
  return {
    [RSAA]: {
      endpoint: `${localHost}/items`,
      method: 'GET',
      types: [`REQUEST_ITEMS`, `SUCCESS_ITEMS`, `FAILURE_ITEMS`]
    }
  }
}

export const uploadItem = name => {
  return createAction({
    headers: {
        'Content-Type': 'application/json'
    },
    endpoint: `${localHost}/upload-item?name=${name}`,
    method: 'POST',
    types: [`REQUEST_POST_ITEMS`, `SUCCESS_POST_ITEMS`, `FAILURE_POST_ITEMS`]
  });
}


export const deleteItem = name => {
  return createAction({
    headers: {
        'Content-Type': 'application/json'
    },
    endpoint: `${localHost}/delete-item?name=${name}`,
    method: 'POST',
    types: [`REQUEST_POST_ITEMS`, `SUCCESS_POST_ITEMS`, `FAILURE_POST_ITEMS`]
  });
}

