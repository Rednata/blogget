import axios from 'axios';
import {URL_API} from '../../api/const';

export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_REQUEST_SUCCESS = 'COMMENTS_REQUEST_SUCCESS';
export const COMMENTS_REQUEST_ERROR = 'COMMENTS_REQUEST_ERROR';

export const commentsRequest = () => ({
  type: COMMENTS_REQUEST,
});

export const commentsRequestSuccess = (comments) => ({
  type: COMMENTS_REQUEST_SUCCESS,
  comments,
});

export const commentsRequestError = () => ({
  type: COMMENTS_REQUEST_ERROR,
});

export const commentsRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().token.token;
  if (!token) return;
  dispatch(commentsRequest());

  axios(`${URL_API}/comments/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
      .then(({data}) => {
        const postInfo = data[0].data.children[0].data;
        const comments = data[1].data.children;
        const {author, title} = postInfo;
        dispatch(commentsRequestSuccess([author, title, comments]));
      });
};
