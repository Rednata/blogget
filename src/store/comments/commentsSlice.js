import {createSlice} from '@reduxjs/toolkit';
import {commentsRequestAsync} from './commentsAction';
// import {commentsRequestAsync} from './commentsAction';

console.log(commentsRequestAsync.pending.type);
console.log(commentsRequestAsync.fulfilled.type);

const initialState = {
  post: {},
  comments: [],
  status: '',
  error: '',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
  },
  extraReducers: {
    [commentsRequestAsync.pending.type]: (state) => {
      state.status = 'loading';
      state.error = '';
    },
    [commentsRequestAsync.fulfilled.type]: (state, action) => {
      state.post = action.payload.postInfo;
      state.comments = action.payload.comments;
      state.status = 'loaded';
      state.error = '';
    },
    [commentsRequestAsync.rejected.type]: (state, action) => {
      state.status = 'error';
      state.error = action.payload.error;
    },
  },
});

export default commentsSlice.reducer;
