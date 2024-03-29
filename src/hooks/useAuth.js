import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  authRequestAsync,
  authRequestLogout,
} from '../store/auth/authAction';

export const useAuth = () => {
  const auth = useSelector(state => state.auth.data);
  const token = useSelector(state => state.token.token);
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authRequestAsync());
  }, [token]);

  const clearAuth = () => dispatch(authRequestLogout());
  return [auth, loading, clearAuth];
};
