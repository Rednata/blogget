import {useState, useEffect} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {URL_API} from '../../../api/const';

import {ReactComponent as LoginIcon} from './img/login.svg';

export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useState({});
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }).then(response => {
      if (response.status === 401) {
        delToken();
        setAuth({});
      }
      return response.json();
    })
        .then(({name, icon_img: iconImg}) => {
          const img = iconImg.replace(/\?.*$/, '');
          setAuth({name, img});
        })
        .catch((err) => {
          console.log(err);
          setAuth({});
        });
  }, [token]);

  const clickLogout = () => {
    if (!logout) {
      setLogout(true);
    } else {
      delToken();
      setAuth({});
      // setLogout(false);
    }
  };

  return (
    <div className={style.container}>
      {auth.name ? (
        <button className={style.btn} onClick={clickLogout}>
          <img
            className={style.img}
            src={auth.img}
            title={auth.name}
            alt={`Аватар ${auth.name}`} />

          {
            (logout &&
              <Text className={style.logout}>Выйти</Text>)
          }


        </button>
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
