import {URL_API} from '../api/const';
// eslint-disable-next-line no-unused-vars
import {useContext, useEffect, useState} from 'react';
import {tokenContext} from '../context/tokenContext';

export const useCommentsData = (id) => {
  const [comments, setComments] = useState('');
  const {token} = useContext(tokenContext);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
        .then(response => response.json())
        .then(data => setComments(data));
  }, [id]);

  return [comments];
};


