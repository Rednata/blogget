import {URL_API} from '../../api/const';
import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

const CHANGE_PAGE = 'CHANGE_PAGE';
export const changePage = () => ({
  type: CHANGE_PAGE,
});

export const postsRequestAsync = createAsyncThunk(
    'posts/fetch',
    (newPage, {getState}) => {
      let page = getState().posts.page;
      if (newPage) {
        console.log('newPage ', newPage);
        page = newPage;
        // dispatch(postsSlice.actions.changePage({page}));
      }

      console.log('page ', page);

      const token = getState().token.token;
      const after = getState().posts.after;
      const loading = getState().posts.loading;
      const isLast = getState().posts.isLast;

      if (!token || loading || isLast) return;

      return axios(
          `${URL_API}/${page}?limit=5&${after ? `after=${after}` : ''}`, {
            headers: {
              Authorization: `bearer ${token}`,
            },
          })
          .then(({data}) => {
            console.log(page);
            if (after) {
              const statePosts = getState().posts.posts;
              data.data.children = [...statePosts, ...data.data.children];
              data.data.countAfter = 1;
              return (data.data);
            } else {
              data.data.countAfter = 0;
              console.log(data.data);
              return (data.data);
            }
          })
          .catch((error) => ({error: error.toString()}));
    },
);

// export const postsRequestAsync1 = (newPage) => (dispatch, getState) => {
//   let page = getState().posts.page;

//   if (newPage) {
//     page = newPage;
//     dispatch(postsSlice.actions.changePage({page}));
//   }

//   const token = getState().token.token;
//   const after = getState().posts.after;
//   const loading = getState().posts.loading;
//   const isLast = getState().posts.isLast;

//   if (!token || loading || isLast) return;
//   dispatch(postsSlice.actions.postsRequest());

//   axios(`${URL_API}/${page}?limit=5&${after ? `after=${after}` : ''}`, {
//     headers: {
//       Authorization: `bearer ${token}`,
//     },
//   })
//       .then(({data}) => {
//         if (after) {
//           dispatch(postsSlice.actions.postsRequestSuccessAfter(data.data));
//         } else {
//           dispatch(postsSlice.actions.postsRequestSuccess(data.data));
//         }
//       })
//       .catch((error) => {
//         dispatch(postsSlice.actions.postsRequestError(error));
//       });
// };
