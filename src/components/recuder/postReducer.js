const initialState = {
  loading: false,
  posts: [],
};

const postReducer = function (state = initialState, action) {
  switch (action.type) {
    case "POST_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "POST_SUCCESS":
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case "POST_FAILURE":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default postReducer;
