import {URL_API} from '../../api/const';
import axios from 'axios';

export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export const POSTS_REQUEST_SUCCESS_AFTER = 'POSTS_REQUEST_SUCCESS_AFTER';
export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';

export const postsRequest = () => ({
  type: POSTS_REQUEST,
});

export const postsRequestSuccess = (data) => ({
  type: POSTS_REQUEST_SUCCESS,
  posts: data.children,
  after: data.after,
});

export const postsRequestSuccessAfter = (data) => ({
  type: POSTS_REQUEST_SUCCESS_AFTER,
  posts: data.children,
  after: data.after,
});

export const postsRequestError = () => ({
  type: POSTS_REQUEST_ERROR,
});

export const postsRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token;
  const after = getState().postsData.after;
  const loading = getState().postsData.loading;
  const isLast = getState().postsData.isLast;

  if (!token || loading || isLast) return;
  dispatch(postsRequest());

  axios(`${URL_API}/best?limit=10&${after ? `after=${after}` : ''}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
      .then(({data}) => {
        if (after) {
          dispatch(postsRequestSuccessAfter(data.data));
        } else {
          dispatch(postsRequestSuccess(data.data));
        }
      })
      .catch((err) => {
        dispatch(postsRequestError(err));
      });
};
