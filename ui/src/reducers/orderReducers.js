const initialState = {
  orders: [],
  isUploadingItem: false,
  uploadMessage: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `REQUEST_POST_ORDER`:
      return {
        ...state,
        isUploadingItem: true,
        uploadMessage: ''
      };
    case `FAILURE_POST_ORDER`:
      return {
        ...state,
        isUploadingItem: false,
        uploadMessage: action.payload.message
      };
    case `SUCCESS_POST_ORDER`:
      return {
        ...state,
        isUploadingItem: false,
        uploadMessage: action.payload.message
      };
    default:
      return state;
  }
};
