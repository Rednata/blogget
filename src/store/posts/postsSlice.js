import {createSlice} from '@reduxjs/toolkit';
import {postsRequestAsync} from './postsAction';

const initialState = {
  loading: false,
  posts: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
  countAfter: -2,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload.page;
      state.after = null;
      state.isLast = false;
      state.countAfter = -2;
    },
    changeLoading: (state) => {
      state.loading = true;
    },
  },
  extraReducers: {
    [postsRequestAsync.pending.type]: (state) => {
    },
    [postsRequestAsync.fulfilled.type]: (state, action) => {
      if (action.payload) {
        state.posts = action.payload.children;
        state.after = action.payload.after;
        state.isLast = !action.payload.after;
        state.loading = false;
        state.error = '';
        state.countAfter += 1;
      } else {
        state.loading = false;
        state.after = '';
        state.isLast = true;
        state.error = '';
      }
    },
    [postsRequestAsync.rejected.type]: (state, action) => {
      state.status = 'error';
      state.error = action.payload.error;
    },
  },
});

export default postsSlice.reducer;
