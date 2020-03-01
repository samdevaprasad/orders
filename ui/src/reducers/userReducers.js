const initialState = {
  users: [],
  uploadMessage: ''
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
    case `REQUEST_P`:
      return {
        ...state,
        isUploadingUser: true,
        uploadMessage: ''
      };
    case `FAILURE_P`:
      return {
        ...state,
        isUploadingUser: false,
        uploadMessage: action.payload.message
      };
    case `SUCCESS_P`:
      return {
        ...state,
        isUploadingUser: false,
        uploadMessage: action.payload.message
      };
    default:
      return state;
  }
};
