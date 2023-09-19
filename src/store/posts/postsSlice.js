import {createSlice} from '@reduxjs/toolkit';
import {URL_API} from '../../api/const';
import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const postsRequestAsync = createAsyncThunk(
    'posts/fetch',
    (newPage, {getState}) => {
      let page = getState().posts.page;

      if (newPage) {
        console.log('NEWWW');
        page = newPage;
        // dispatch(postsSlice.actions.changePage({page}));
      }

      const token = getState().token.token;
      const after = getState().posts.after;
      const loading = getState().posts.loading;
      const isLast = getState().posts.isLast;

      if (!token || loading || isLast) return;
      // dispatch(postsSlice.actions.postsRequest());

      return axios(
          `${URL_API}/${page}?limit=5&${after ? `after=${after}` : ''}`, {
            headers: {
              Authorization: `bearer ${token}`,
            },
          })
          .then(({data}) => {
            console.log(after);
            // if (after) {
            //   console.log(data);
            //   const statePosts = getState().posts.posts;
            //   console.log('statePosts: ', statePosts);
            //   return statePosts;

            // dispatch(postsSlice.actions.postsRequestSuccessAfter(data.data));
            // } else {
            console.log(data.data);
            return (data.data);
            // }
          })
          .catch((error) => ({error: error.toString()}));
    },
);

const initialState = {
  loading: false,
  posts: [],
  error: '',
  after: '',
  isLast: false,
  page: 'best',
  countAfter: 0,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // postsRequest: (state) => {
    //   state.loading = true;
    // },
    // postsRequestSuccess: (state, action) => {
    //   state.loading = false;
    //   state.posts = action.payload.children;
    //   state.error = '';
    //   state.after = action.payload.after;
    //   state.isLast = !action.payload.after;
    // },
    // postsRequestSuccessAfter: (state, action) => {
    //   state.loading = false;
    //   state.posts = [...state.posts, ...action.payload.children];
    //   state.error = '';
    //   state.after = action.payload.after;
    //   state.countAfter += 1;
    // },
    // postsRequestError: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload.error;
    // },
    // changePage: (state, action) => {
    //   state.page = action.payload.page;
    //   state.after = '';
    //   state.isLast = false;
    //   state.countAfter = 0;
    // },
  },
  extraReducers: {
    [postsRequestAsync.pending.type]: (state) => {
      state.loading = false;
      // state.loading = true;
    },
    [postsRequestAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.posts = action.payload.children;
      state.error = '';
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
    },
    [postsRequestAsync.rejected.type]: (state, action) => {
      state.status = 'error';
      state.error = action.payload.error;
    },
  },
});

// Прежняя функция postsRequestAsync на диспатчах;
export function postsRequestAsync1(newPage) {
  return (dispatch, getState) => {
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
}

export default postsSlice.reducer;
