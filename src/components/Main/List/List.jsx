import React from 'react';
import style from './List.module.css';
import Post from './Post';

export const List = props => {
  const postData = {
    thumbnail: '',
    title: 'Title',
    author: 'Nickname',
    ups: 24,
    date: '2023-06-16T14:00:00.000Z',

  };
  return (
    <ul className={style.list}>
      <Post postData={postData}/>
    </ul>
  );
};

