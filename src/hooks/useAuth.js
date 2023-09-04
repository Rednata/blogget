import {useEffect} from 'react';
import {URL_API} from '../api/const';
import {useSelector, useDispatch} from 'react-redux';
import {deleteToken} from '../store/tokenReducer';
import axios from 'axios';
import {
  authRequest,
  authRequestSuccess,
  authRequestError,
  authRequestLogout,
} from '../store/auth/action';

export const useAuth = () => {
  const auth = useSelector(state => state.auth.data);
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;
    dispatch(authRequest());

    axios(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
        .then(({data: {name, icon_img: iconImg}}) => {
          const img = iconImg.replace(/\?.*$/, '');
          const data = {name, img};
          dispatch(authRequestSuccess(data));
        })
        .catch(err => {
          dispatch(deleteToken());
          dispatch(authRequestError(err.toString()));
        });
  }, [token]);

  const clearAuth = () => dispatch(authRequestLogout());
  return [auth, clearAuth];
};
