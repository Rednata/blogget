import {
  CHANGE_PAGE,
} from './postsAction';

// const initialState = {
//   loading: false,
//   posts: [],
//   error: '',
//   after: '',
//   isLast: false,
//   page: '',
//   countAfter: 0,
// };

const initialState = {
  posts: [],
  page: '',
};

export const changePostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.page,
      };
  }
};

// export const postsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case POSTS_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };

//     case POSTS_REQUEST_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         posts: action.posts,
//         error: '',
//         after: action.after,
//         isLast: !action.after,
//       };

//     case POSTS_REQUEST_SUCCESS_AFTER:
//       return {
//         ...state,
//         loading: false,
//         posts: [...state.posts, ...action.posts],
//         error: '',
//         after: action.after,
//         countAfter: state.countAfter + 1,
//       };

//     case CHANGE_PAGE:
//       return {
//         ...state,
//         page: action.page,
//         after: '',
//         isLast: false,
//       };

//     case POSTS_REQUEST_ERROR:
//       return {
//         ...state,
//         loading: false,
//         error: action.err,
//       };

//     default:
//       return state;
//   }
// };
