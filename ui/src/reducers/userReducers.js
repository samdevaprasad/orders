const initialState = {
    users: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `REQUEST`:
        return {
            ...state
        };
    case `FAILURE`:
        return {
            ...state
        };
    case `SUCCESS`:
      return {
          ...state,
          users: action.payload
      };
    default:
      return state;
  }
};
