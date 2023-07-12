import style from './Thumbnail.module.css';
import notphoto from '../img/notphoto.jpg';
import PropTypes from 'prop-types';
import {useState} from 'react';

export const Thumbnail = ({thumbnail, title}) => {
  const [src, setSrc] = useState(thumbnail);

  const getSceletonSrc = () => {
    setSrc(notphoto);
  };
  return (
    <img className={style.img}
      width='140'
      height='140'
      src={src}
      alt={title}
      onError={getSceletonSrc}/>
  );
};

Thumbnail.propTypes = {
  thumbnail: PropTypes.string,
  width: PropTypes.string,
  title: PropTypes.string,
};
