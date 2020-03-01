import { RSAA, createAction } from 'redux-api-middleware';
import { localHost } from '../constants';

export const retrieveAllUsers = () => {
  return {
    [RSAA]: {
      endpoint: `${localHost}/users`,
      method: 'GET',
      types: [`REQUEST`, `SUCCESS`, `FAILURE`]
    }
  }
}

export const uploadUser = name => {
  return createAction({
    headers: {
        'Content-Type': 'application/json'
    },
    endpoint: `${localHost}/upload-user?name=${name}`,
    method: 'POST',
    types: [`REQUEST_P`, `SUCCESS_P`, `FAILURE_P`]
  });
}


export const deleteUser = name => {
  return createAction({
    headers: {
        'Content-Type': 'application/json'
    },
    endpoint: `${localHost}/delete-user?name=${name}`,
    method: 'POST',
    types: [`REQUEST_P`, `SUCCESS_P`, `FAILURE_P`]
  });
}

