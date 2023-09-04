import {useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {useDispatch} from 'react-redux';
import {deleteToken} from '../../../store/tokenReducer';
import {useAuth} from '../../../hooks/useAuth';
import PreLoader from '../../../UI/PreLoader';

export const Auth = () => {
  const [showLogout, setShowLogout] = useState(false);

  const [auth, loading, clearAuth] = useAuth();
  const dispatch = useDispatch();

  const getOut = () => {
    setShowLogout(!showLogout);
  };

  const logOut = () => {
    dispatch(deleteToken());
    clearAuth();
  };

  return (
    <div className={style.container}>
      {loading ? (<PreLoader size={30} />) : auth.name ? (
        <>
          <button className={style.btn} onClick={getOut}>
            <img
              className={style.img}
              src={auth.img}
              title={auth.name}
              alt={`Аватар ${auth.name}`} />
          </button>
          {
            showLogout &&
            <button
              className={style.logout}
              onClick={logOut}>Выйти</button>
          }
        </>
        ) : (
      <Text className={style.authLink} As='a' href={urlAuth}>
        <LoginIcon width={25} height={25} color='#cc6633'/>
      </Text>
      )
      }
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
