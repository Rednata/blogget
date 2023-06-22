import React from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';

import {ReactComponent as LoginIcon} from './img/login.svg';

export const Auth = ({auth}) => (
  <button className={style.button}>
    {auth ? auth :
      <LoginIcon width={25} height={25} color='#cc6633'/>
      // <img className={style.svg} src={loginImg} alt="Авторизация" />
    }
  </button>
);

Auth.propTypes = {
  auth: PropTypes.string,
};
