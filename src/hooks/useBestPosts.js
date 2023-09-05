import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {postsDataRequestAsync} from '../store/postsDataReducer/postsDataAction';

export const useBestPosts = () => {
  const bestPosts = useSelector(state => state.postsData.data);
  const dispatch = useDispatch();
  const token = useSelector(state => state.token.token);

  useEffect(() => {
    dispatch(postsDataRequestAsync());
  }, [token]);

  return [bestPosts];
};
