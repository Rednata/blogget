import {
  POSTS_REQUEST,
  POSTS_REQUEST_SUCCESS,
  POSTS_REQUEST_SUCCESS_AFTER,
  POSTS_REQUEST_ERROR,
  CHANGE_PAGE,
} from './postsAction';

const initialState = {
  loading: false,
  posts: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
  countAfter: 0,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case POSTS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.posts,
        error: '',
        after: action.after,
        isLast: !action.after,
      };

    case POSTS_REQUEST_SUCCESS_AFTER:
      return {
        ...state,
        loading: false,
        posts: [...state.posts, ...action.posts],
        error: '',
        after: action.after,
        countAfter: state.countAfter + 1,
      };

    case CHANGE_PAGE:
      return {
        ...state,
        page: action.page,
        after: '',
        isLast: false,
      };

    case POSTS_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.err,
      };

    default:
      return state;
  }
};
