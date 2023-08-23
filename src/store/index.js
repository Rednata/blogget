import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {tokenReducer, tokenMiddleWare} from './tokenReducer';
import {commentReducer} from './commentReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  comment: commentReducer,
});

// const logger = (store) => (next) => (action) => {
//   console.log(store);
//   console.log(action);
//   next(action);
// };

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(tokenMiddleWare)),
);
