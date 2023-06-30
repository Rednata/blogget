import {useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {useAuth} from '../../../hooks/useAuth';

export const Auth = ({token, delToken}) => {
  const [logoutBtn, setLogoutBtn] = useState(false);

  const auth = useAuth(token);

  const handleClickLogout = () => {
    if (!logoutBtn) {
      setLogoutBtn(true);
    } else {
      setLogoutBtn(false);
    }
  };
  // const clickLogout = () => {
  //   if (!logout) {
  //     setLogout(true);
  //   } else {
  //     delToken();
  //     setAuth({});
  //     // setLogout(false);
  //   }
  // };

  return (
    <div className={style.container}>
      {auth.name ? (
        <>
          <button className={style.btn} onClick={handleClickLogout}>
            <img
              className={style.img}
              src={auth.img}
              title={auth.name}
              alt={`Аватар ${auth.name}`} />
          </button>
          {
            logoutBtn &&
            <button className={style.logout}
              onClick={handleClickLogout}>Выйти</button>
          }
        </>
        ) : (
      <Text className={style.authLink} As='a' href={urlAuth}>
        <LoginIcon width={25} height={25} color='#cc6633'/>
      </Text>
      )
        // <img className={style.svg} src={loginImg} alt="Авторизация" />
      }
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
