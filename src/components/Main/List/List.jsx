/* eslint-disable no-unused-vars */
import style from './List.module.css';
import Post from './Post';
import PreLoader from '../../../UI/PreLoader';
import {useRef, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postsRequestAsync} from '../../../store/posts/postsAction';
import {Outlet, useParams} from 'react-router-dom';

export const List = props => {
  const countAfter = useSelector(state => state.posts.countAfter);

  const posts = useSelector(state => state.posts.posts);

  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();

  useEffect(() => {
    console.log(page);
    dispatch(postsRequestAsync(page));
  }, [page]);


  useEffect(() => {
    if (!endList.current) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(postsRequestAsync());
      }
    }, {
      rootMargin: '100px',
    });
    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
      // };
    };
  }, [endList.current]);

  return (
    <>
      <ul className={style.list}>
        {
          posts.length >= 1 ?
            posts.map(({data}) =>
              <Post key={data.id} data={data} />) :
          <PreLoader size={250}/>
        }
      </ul>
      {countAfter < 2 ?
          <li ref={endList} className={style.end}/> :
            <button
              className={style.btnMore}
              onClick={() => dispatch(postsRequestAsync())}
            >Загрузить еще...</button>
      }
      <Outlet />
    </>
  );
};
