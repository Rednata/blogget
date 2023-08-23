import {getToken, setToken} from '../api/token';

const UPDATE_TOKEN = 'UPDATE_TOKEN';
const DELETE_TOKEN = 'DELETE_TOKEN';

const initialState = {
  token: getToken(),
};

export const updateToken = token => ({
  type: UPDATE_TOKEN,
  token,
});

export const deleteToken = () => ({
  type: DELETE_TOKEN,
});

export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TOKEN:
      setToken('');
      return {
        ...state, token: '',
      };
    case UPDATE_TOKEN:
      console.log('0000000000');
      setToken(action.token);
      return {
        ...state, token: action.token,
      };
    default:
      return state;
  }
};
