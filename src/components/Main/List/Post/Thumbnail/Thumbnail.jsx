import style from './Thumbnail.module.css';
// import notphoto from '../img/notphoto.jpg';
import PropTypes from 'prop-types';
import {useEffect} from 'react';

export const Thumbnail = ({thumbnail, title}) => {
  useEffect(() => {
    console.log(thumbnail);
  });

  return (
    <img className={style.img} src={thumbnail} alt={title} />
  );
};

Thumbnail.propTypes = {
  thumbnail: PropTypes.string,
  width: PropTypes.string,
  title: PropTypes.string,
};
