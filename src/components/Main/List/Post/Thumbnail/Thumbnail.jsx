import style from './Thumbnail.module.css';
// import notphoto from '../img/notphoto.jpg';
import PropTypes from 'prop-types';

export const Thumbnail = ({thumbnail, title}) => {
  console.log();
  return (
    <img className={style.img} src={thumbnail} alt={title} />
  );
};

Thumbnail.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
};
