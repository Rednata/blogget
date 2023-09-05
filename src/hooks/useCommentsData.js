import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  postCommentsRequestAsync,
} from '../store/postCommentsDataReducer/postCommentsDataAction';

export const useCommentsData = (id) => {
  const comments = useSelector(state => state.postComments.postComments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postCommentsRequestAsync(id));
  }, [id]);

  return comments;
};


