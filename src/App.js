import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {AuthContextProvider} from './context/authContext';
import {PostContextProvider} from './context/postContext';
import {useDispatch} from 'react-redux';
import {updateToken} from './store/tokenReducer';
import {getToken} from './api/token';

const App = () => {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));
  return (
    <AuthContextProvider>
      <PostContextProvider>
        <Header />
        <Main />
      </PostContextProvider>
    </AuthContextProvider>
  );
};

export default App;
