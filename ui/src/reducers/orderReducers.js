const initialState = {
  orders: [],
  isUploadingOrder: false,
  uploadMessage: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `REQUEST_ORDERS`:
      return {
        ...state
      };
    case `FAILURE_ORDERS`:
      return {
        ...state
      };
    case `SUCCESS_ORDERS`:
      return {
        ...state,
        orders: action.payload
      };
    case `REQUEST_POST_ORDER`:
      return {
        ...state,
        isUploadingOrder: true,
        uploadMessage: ''
      };
    case `FAILURE_POST_ORDER`:
      return {
        ...state,
        isUploadingOrder: false,
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
