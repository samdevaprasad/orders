const initialState = {
  items: [],
  uploadMessage: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `REQUEST_ITEMS`:
      return {
        ...state
      };
    case `FAILURE_ITEMS`:
      return {
        ...state
      };
    case `SUCCESS_ITEMS`:
      return {
        ...state,
        items: action.payload
      };
    case `REQUEST_POST_ITEMS`:
      return {
        ...state,
        isUploadingItem: true,
        uploadMessage: ''
      };
    case `FAILURE_POST_ITEMS`:
      return {
        ...state,
        isUploadingItem: false,
        uploadMessage: action.payload.message
      };
    case `SUCCESS_POST_ITEMS`:
      return {
        ...state,
        isUploadingItem: false,
        uploadMessage: action.payload.message
      };
    default:
      return state;
  }
};
