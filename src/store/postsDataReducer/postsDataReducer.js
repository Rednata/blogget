import {
  POSTS_DATA_REQUEST,
  POSTS_DATA_REQUEST_SUCCESS,
} from './postsDataAction';

const initialState = {
  loading: false,
  data: {},
};

export const postsDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case POSTS_DATA_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };

    default:
      return state;
  }
};
