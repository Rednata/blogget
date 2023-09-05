import axios from 'axios';
import {URL_API} from '../../api/const';

export const GET_POST_COMMENTS = 'GET_POST_COMMENTS';

export const getPostCommentsRequest = (postComments) => ({
  type: GET_POST_COMMENTS,
  postComments,
});

export const getPostCommentsRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().token.token;
  if (!token) return;

  axios(`${URL_API}/comments/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
      .then(({data}) => {
        const postInfo = data[0].data.children[0].data;
        const postComments = data[1].data.children;
        const {author, title} = postInfo;
        console.log(author, title);
        console.log(data);
        console.warn(postInfo);
        console.log(postComments);
        dispatch(getPostCommentsRequest([author, title, postComments]));
      });
};
