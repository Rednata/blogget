import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {tokenReducer, tokenMiddleWare} from './tokenReducer';
import {commentReducer} from './commentReducer';
import thunk from 'redux-thunk';
import {authReducer} from './authReducer/authReducer';
import {postsReducer} from './postsReducer/postsReducer';
import {
  postCommentsDataReducer,
} from './postCommentsDataReducer/postCommentsDataReducer.js';

const rootReducer = combineReducers({
  token: tokenReducer,
  comment: commentReducer,
  auth: authReducer,
  postsData: postsReducer,
  postComments: postCommentsDataReducer,
});

// const logger = (store) => (next) => (action) => {
//   console.log(store);
//   console.log(action);
//   next(action);
// };

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(tokenMiddleWare, thunk)),
);
