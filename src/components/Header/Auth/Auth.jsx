import {useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {useAuth} from '../../../hooks/useAuth';

export const Auth = ({token, delToken}) => {
  const [logoutBtn, setLogoutBtn] = useState(false);

  const [auth, setAuth] = useAuth(token, delToken);

  const handleClickAuthBtn = () => {
    if (!logoutBtn) {
      setLogoutBtn(true);
    } else {
      setLogoutBtn(false);
    }
  };

  const handleClickLogoutBtn = () => {
    delToken();
    setAuth({});
  };

  return (
    <div className={style.container}>
      {auth.name ? (
        <>
          <button className={style.btn} onClick={handleClickAuthBtn}>
            <img
              className={style.img}
              src={auth.img}
              title={auth.name}
              alt={`Аватар ${auth.name}`} />
          </button>
          {
            logoutBtn &&
            <button
              className={style.logout}
              onClick={handleClickLogoutBtn}>Выйти</button>
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
