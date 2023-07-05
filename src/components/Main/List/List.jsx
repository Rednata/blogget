import React, {useContext} from 'react';
import {postContext} from '../../../context/postContext';
import style from './List.module.css';
import Post from './Post';
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
  // generateRandomID();

  const [bestPosts] = useContext(postContext);

  console.log(bestPosts);

  const postsData = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      ups: 124,
      date: '2022-05-10T14:00:10.000Z',
      id: '123',
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname2',
      ups: 77,
      date: '2023-04-10T10:00:00.000Z',
      id: '568',
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      ups: 85,
      date: '2023-03-05T04:50:00.000Z',
      id: '245',
    },
    {
      thumbnail: '',
      title: 'Title4',
      author: 'Nickname4',
      ups: 12,
      date: '2023-06-11T14:40:00.000Z',
      id: '574',
    },
  ];
  return (
    <ul className={style.list}>
      {
        postsData.map(postData =>
          <Post key={postData.id} postData={postData} />)
      }
    </ul>
  );
};
