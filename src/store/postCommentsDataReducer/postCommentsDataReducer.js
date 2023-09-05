import {
  POST_COMMENTS_REQUEST,
  POST_COMMENTS_REQUEST_ERROR,
  POST_COMMENTS_REQUEST_SUCCESS,
} from './postCommentsDataAction';

const initialState = {
  postComments: [],
  status: '',
};

export const postCommentsDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_COMMENTS_REQUEST:
      return {
        ...state,
        status: 'loading',
      };

    case POST_COMMENTS_REQUEST_SUCCESS:
      return {
        ...state, postComments: action.postComments,
        status: 'loaded',
      };
    case POST_COMMENTS_REQUEST_ERROR:
      return {
        ...state,
        status: 'error',
      };
    default:
      return state;
  }
};
