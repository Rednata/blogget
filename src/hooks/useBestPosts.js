import {URL_API} from '../api/const';
import {useContext, useEffect, useState} from 'react';
import {tokenContext} from '../context/tokenContext';

export const useBestPosts = () => {
  const [bestPosts, setBestPosts] = useState('');
  const {token} = useContext(tokenContext);

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
