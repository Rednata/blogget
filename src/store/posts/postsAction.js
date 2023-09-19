import {URL_API} from '../../api/const';
import axios from 'axios';
import {postsSlice} from './postsSlice';

export const postsRequestAsync1 = (newPage) => (dispatch, getState) => {
  let page = getState().posts.page;

  if (newPage) {
    page = newPage;
    dispatch(postsSlice.actions.changePage({page}));
  }

  const token = getState().token.token;
  const after = getState().posts.after;
  const loading = getState().posts.loading;
  const isLast = getState().posts.isLast;

  if (!token || loading || isLast) return;
  dispatch(postsSlice.actions.postsRequest());

  axios(`${URL_API}/${page}?limit=5&${after ? `after=${after}` : ''}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
      .then(({data}) => {
        if (after) {
          dispatch(postsSlice.actions.postsRequestSuccessAfter(data.data));
        } else {
          dispatch(postsSlice.actions.postsRequestSuccess(data.data));
        }
      })
      .catch((error) => {
        dispatch(postsSlice.actions.postsRequestError(error));
      });
};
