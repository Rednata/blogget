import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  commentsRequestAsync,
} from '../store/comments/commentsAction';

export const useCommentsData = (id) => {
  const commentss = useSelector(state => state.comments.comments);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commentsRequestAsync(id));
  }, [id]);

  return commentss;
};


