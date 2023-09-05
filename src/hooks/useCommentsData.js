import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  getPostCommentsRequestAsync,
} from '../store/postCommentsDataReducer/postCommentsDataAction';

export const useCommentsData = (id) => {
  const comments = useSelector(state => state.postComments.postComments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostCommentsRequestAsync(id));
  }, [id]);

  return comments;
};


