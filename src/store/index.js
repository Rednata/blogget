import {createStore} from 'redux';

const UPDATE_COMMENT = 'UPDATE_COMMENT';

export const updateComment = comment => ({
  type: UPDATE_COMMENT,
  comment,
});

const initialState = {
  comment: 'Hello Redux',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state, comment: action.comment,
      };
    default:
      return state;
  }
};

export const store = createStore(rootReducer);
