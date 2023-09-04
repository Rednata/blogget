import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {PostContextProvider} from './context/postContext';
import {useDispatch} from 'react-redux';
import {updateToken} from './store/tokenReducer';
import {getToken} from './api/token';
// import {store} from './store';

// const time = () => dispatch => {
//   dispatch({
//     type: 'START',
//   });

//   setTimeout(() => {
//     dispatch({type: 'END'});
//   }, 3000);
// };

const App = () => {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));

  // store.dispatch(time());
  return (
    <PostContextProvider>
      <Header />
      <Main />
    </PostContextProvider>
  );
};

export default App;
