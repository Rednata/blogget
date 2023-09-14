import {createSlice} from '@reduxjs/toolkit';
import {postCommentsRequestAsync} from './commentsAction';

const initialState = {
  post: {},
  postComments: [],
  status: '',
  error: '',
  nat: 'OK',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    // postCommentsRequest: (state) => {
    //   state.status = 'loading';
    //   state.error = '';
    // },
    // postCommentsRequestSuccess: (state, action) => {
    //   state.post = action.payload.post;
    //   state.postComments = action.payload.postCommentsData;
    //   state.status = 'loaded';
    //   state.error = '';
    //   state.nat = 'ok!!!!!!!!!!!!!!!';
    // },
    // postCommentsRequestError: (state, action) => {
    //   state.status = 'error';
    //   state.error = action.payload.error;
    // },
  },

  extraReducers: {
    [postCommentsRequestAsync.pending.type]: (state) => {
      state.status = 'loading';
      state.error = '';
    },
    [postCommentsRequestAsync.fulfilled.type]: (state, action) => {
      state.post = action.payload.post;
      state.postComments = action.payload.postCommentsData;
      state.status = 'loaded';
      state.error = '';
      state.nat = 'ok!!!!!!!!!!!!!!!';
    },
    [postCommentsRequestAsync.rejected.type]: (state, action) => {
      state.status = 'error';
      state.error = action.payload.error;
    },
  },
});

export default commentsSlice.reducer;
