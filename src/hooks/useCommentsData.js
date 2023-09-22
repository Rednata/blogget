import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  commentsRequestAsync,
} from '../store/comments/commentsAction';

export const useCommentsData = (id) => {
  const comments = useSelector(state => state.comments);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commentsRequestAsync(id));
  }, [id]);

  return comments;
};


