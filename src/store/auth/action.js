import {URL_API} from '../../api/const';
import {deleteToken} from '../tokenReducer';
import axios from 'axios';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS';
export const AUTH_REQUEST_ERROR = 'AUTH_REQUEST_ERROR';
export const AUTH_REQUEST_LOGOUT = 'AUTH_REQUEST_LOGOUT';

export const authRequest = () => ({
  type: AUTH_REQUEST,
});

export const authRequestSuccess = (data) => ({
  type: AUTH_REQUEST_SUCCESS,
  data,
});

export const authRequestError = (error) => ({
  type: AUTH_REQUEST_ERROR,
  error,
});

export const authRequestLogout = () => ({
  type: AUTH_REQUEST_LOGOUT,
});

export const authRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token;
  if (!token) return;
  dispatch(authRequest());

  axios(`${URL_API}/api/v1/me`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
      .then(({data: {name, icon_img: iconImg}}) => {
        const img = iconImg.replace(/\?.*$/, '');
        const data = {name, img};
        dispatch(authRequestSuccess(data));
      })
      .catch(err => {
        dispatch(deleteToken());
        dispatch(authRequestError(err.toString()));
      });
};
