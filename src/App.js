import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {useToken} from './hooks/useToken';
import {tokenContext} from './context/tokenContext';
import {AuthContextProvider} from './context/authContext';

function App() {
  const [token, delToken] = useToken('');
  const {Provider} = tokenContext;

  return (
    <Provider value={{token, delToken}}>
      <AuthContextProvider>
        <Header />
        <Main />
      </AuthContextProvider>
    </Provider>
  );
}

export default App;
