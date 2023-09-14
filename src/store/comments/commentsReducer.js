import {
  COMMENTS_REQUEST,
  COMMENTS_REQUEST_ERROR,
  COMMENTS_REQUEST_SUCCESS,
} from './commentsAction';

const initialState = {
  comments: [],
  status: '',
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_REQUEST:
      return {
        ...state,
        status: 'loading',
      };

    case COMMENTS_REQUEST_SUCCESS:
      return {
        ...state, comments: action.comments,
        status: 'loaded',
      };
    case COMMENTS_REQUEST_ERROR:
      return {
        ...state,
        status: 'error',
      };
    default:
      return state;
  }
};
