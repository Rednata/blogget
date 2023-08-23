import {URL_API} from '../api/const';
// eslint-disable-next-line no-unused-vars
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

export const useCommentsData = (id) => {
  const [comments, setComments] = useState('');
  const token = useSelector(state => state.token.token);

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


