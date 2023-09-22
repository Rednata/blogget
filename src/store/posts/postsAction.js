/* eslint-disable no-unused-vars */
import {URL_API} from '../../api/const';
import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const postsRequestAsync = createAsyncThunk(
    'posts/fetch',
    (temp, {getState}) => {
      const page = getState().posts.page;
      const posts = getState().posts.posts;
      const token = getState().token.token;
      const after = getState().posts.after;
      const loading = getState().posts.loading;
      const isLast = getState().posts.isLast;

      console.log('loading: ', loading);

      if (!token || isLast) return;
      // if (!token || loading || isLast) return;

      return axios(
          `${URL_API}/${page}?limit=5&${after ? `after=${after}` : ''}`, {
            headers: {
              Authorization: `bearer ${token}`,
            },
          })
          .then(({data}) => {
            if (after) {
              const statePosts = getState().posts.posts;
              data.data.children = [...statePosts, ...data.data.children];
              return (data.data);
            } else {
              return (data.data);
            }
          })
          .catch((error) => {
            console.warn(error);
            ({error: error.toString()});
          });
    },
);
