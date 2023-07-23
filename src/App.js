import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {TokenContextProvider} from './context/tokenContext';
import {AuthContextProvider} from './context/authContext';
import {PostContextProvider} from './context/postContext';
import {Provider} from 'react-redux';
import {store} from './store/index';

function App() {
  return (
    <Provider store={store}>
      <TokenContextProvider>
        <AuthContextProvider>
          <PostContextProvider>
            <Header />
            <Main />
          </PostContextProvider>
        </AuthContextProvider>
      </TokenContextProvider>
    </Provider>
  );
}

export default App;
