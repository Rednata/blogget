import axios from 'axios';
import {URL_API} from '../../api/const';

export const POST_COMMENTS_REQUEST = 'POST_COMMENTS_REQUEST';
export const POST_COMMENTS_REQUEST_SUCCESS = 'POST_COMMENTS_REQUEST_SUCCESS';
export const POST_COMMENTS_REQUEST_ERROR = 'POST_COMMENTS_REQUEST_ERROR';

export const postCommentsRequest = () => ({
  type: POST_COMMENTS_REQUEST,
});

export const postCommentsRequestSuccess = (postComments) => ({
  type: POST_COMMENTS_REQUEST_SUCCESS,
  postComments,
});

export const postCommentsRequestError = () => ({
  type: POST_COMMENTS_REQUEST_ERROR,
});

export const postCommentsRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().token.token;
  if (!token) return;
  dispatch(postCommentsRequest());

  axios(`${URL_API}/comments/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
      .then(({data}) => {
        const postInfo = data[0].data.children[0].data;
        const postComments = data[1].data.children;
        const {author, title} = postInfo;
        dispatch(postCommentsRequestSuccess([author, title, postComments]));
      });
};
