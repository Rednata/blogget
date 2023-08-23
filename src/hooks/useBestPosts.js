import {URL_API} from '../api/const';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

export const useBestPosts = () => {
  const [bestPosts, setBestPosts] = useState('');
  const token = useSelector(state => state.token.token);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/best`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
        .then(response => response.json())
        .then(data => setBestPosts(data.data.children));
  }, [token]);
  return [bestPosts];
};
