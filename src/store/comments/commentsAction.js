import axios from 'axios';
import {URL_API} from '../../api/const';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const commentsRequestAsync = createAsyncThunk(
    'comments/fetch',
    (id, {getState}) => {
      const token = getState().token.token;

      if (!token) return;

      return axios(`${URL_API}/comments/${id}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
          .then(({data}) => {
            const postInfo = data[0].data.children[0].data;
            const comments = data[1].data.children;
            return {comments, postInfo};
          })
          .catch((error) => ({error: error.toString()}));
    },
);

