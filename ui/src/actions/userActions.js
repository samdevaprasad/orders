import { RSAA } from 'redux-api-middleware';

export const retrieveAllUsers = () => {
    return {
        [RSAA]: {
            endpoint: `http://localhost:6064/users`,
            method: 'GET',
            types: [`REQUEST`, `SUCCESS`, `FAILURE`]
        }
    }
}

