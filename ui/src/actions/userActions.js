import { RSAA, createAction } from 'redux-api-middleware';

export const retrieveAllUsers = () => {
    return {
        [RSAA]: {
            endpoint: `http://localhost:6064/users`,
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
        endpoint: `http://localhost:6064/upload-user?name=${name}`,
        method: 'POST',
        types: [`REQUEST_P`, `SUCCESS_P`, `FAILURE_P`]
      });
}


export const deleteUser = name => {
    return createAction({
        headers: {
            'Content-Type': 'application/json'
        },
        endpoint: `http://localhost:6064/delete-user?name=${name}`,
        method: 'POST',
        types: [`REQUEST_P`, `SUCCESS_P`, `FAILURE_P`]
      });
}

