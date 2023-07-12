import style from './Thumbnail.module.css';
import notphoto from '../img/notphoto.jpg';
import PropTypes from 'prop-types';

export const Thumbnail = ({thumbnail, title}) => {
  console.log();
  return (
  thumbnail.slice(-3) === 'jpg' ?
    <img className={style.img} src={thumbnail} alt={title} /> :
    <img className={style.img}
      width='140'
      height='140'
      src={notphoto}
      alt={title} />
  );
};

Thumbnail.propTypes = {
  thumbnail: PropTypes.string,
  width: PropTypes.string,
  title: PropTypes.string,
};
