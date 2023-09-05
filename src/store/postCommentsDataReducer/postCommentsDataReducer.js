import {GET_POST_COMMENTS} from './postCommentsDataAction';

const initialState = {
  postComments: [],
};

export const postCommentsDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_COMMENTS:
      return {
        ...state, postComments: action.postComments,
      };
    default:
      return state;
  }
};
