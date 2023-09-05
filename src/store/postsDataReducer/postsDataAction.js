import {URL_API} from '../../api/const';
import axios from 'axios';

export const POSTS_DATA_REQUEST = 'POSTS_DATA_REQUEST';
export const POSTS_DATA_REQUEST_SUCCESS = 'POSTS_DATA_REQUEST_SUCCESS';
export const POSTS_DATA_REQUEST_ERROR = 'POSTS_DATA_REQUEST_ERROR';

export const postsDataRequest = () => ({
  type: POSTS_DATA_REQUEST,
});

export const postsDataRequestSuccess = (data) => ({
  type: POSTS_DATA_REQUEST_SUCCESS,
  data,
});

export const postsDataRequestError = () => ({
  type: POSTS_DATA_REQUEST_ERROR,
});

export const postsDataRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token;
  if (!token) return;
  dispatch(postsDataRequest());

  axios(`${URL_API}/best`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
      .then(({data}) => {
        const dataTemp = data.data.children;
        dispatch(postsDataRequestSuccess(dataTemp));
      });
};
