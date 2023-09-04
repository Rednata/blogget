import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {tokenReducer, tokenMiddleWare} from './tokenReducer';
import {commentReducer} from './commentReducer';
import thunk from 'redux-thunk';
import {authReducer} from './auth/authReducer';
import {postsDataReducer} from './postsDataReducer/postsDataReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  comment: commentReducer,
  auth: authReducer,
  postsData: postsDataReducer,
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
