import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {postsRequestAsync} from '../store/posts/postsAction';

export const useBestPosts = () => {
  const bestPosts = useSelector(state => state.postsData.posts);
  const dispatch = useDispatch();
  const token = useSelector(state => state.token.token);

  useEffect(() => {
    dispatch(postsRequestAsync());
  }, [token]);

  return [bestPosts];
};
