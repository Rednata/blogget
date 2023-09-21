import {createSlice} from '@reduxjs/toolkit';
import {postsRequestAsync} from './postsAction';

const initialState = {
  loading: false,
  posts: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
  countAfter: 0,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload.page;
      state.after = '';
      state.isLast = false;
      state.countAfter = 0;
    },
  },
  extraReducers: {
    [postsRequestAsync.pending.type]: (state) => {
      // state.loading = false;
      state.loading = true;
    },
    [postsRequestAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.posts = action.payload.children;
      state.error = '';
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
      state.countAfter += action.payload.countAfter;
    },
    [postsRequestAsync.rejected.type]: (state, action) => {
      state.status = 'error';
      // state.error = action.payload.error;
    },
  },
});

export default postsSlice.reducer;
