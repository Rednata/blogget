/* eslint-disable no-unused-vars */
import style from './List.module.css';
import Post from './Post';
import PreLoader from '../../../UI/PreLoader';
import {useRef, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postsRequestAsync} from '../../../store/posts/postsAction';
import {Outlet, useParams} from 'react-router-dom';

// import {generateRandomID} from '../../../utils/generateRandomID';
// import {useBestPosts} from '../../../hooks/useBestPosts';

// const LIST = [
//   {
//     thumbnail: '',
//     title: 'Title1',
//     author: 'Nickname1',
//     ups: 124,
//     date: '2022-05-10T14:00:10.000Z',
//   },
//   {
//     thumbnail: '',
//     title: 'Title2',
//     author: 'Nickname2',
//     ups: 77,
//     date: '2023-04-10T10:00:00.000Z',
//   },
//   {
//     thumbnail: '',
//     title: 'Title3',
//     author: 'Nickname3',
//     ups: 85,
//     date: '2023-03-05T04:50:00.000Z',
//   },
//   {
//     thumbnail: '',
//     title: 'Title4',
//     author: 'Nickname4',
//     ups: 12,
//     date: '2023-06-11T14:40:00.000Z',
//   },
// ];

export const List = props => {
  const countAfter = useSelector(state => state.postsData.countAfter);
  const bestPosts = useSelector(state => state.postsData.posts);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();

  useEffect(() => {
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
          bestPosts.length >= 1 ?
            bestPosts.map(({data}) =>
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
