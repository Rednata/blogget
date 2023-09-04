import style from './PreLoader.module.css';
import RingLoader from 'react-spinners/RingLoader';
import PropTypes from 'prop-types';

export const PreLoader = ({size}) => {
  console.log();
  return (
    <RingLoader
      className={style.container}
      color='#cc6633'
      css={{display: 'block'}}
      size={size} />);
};

PreLoader.propTypes = {
  size: PropTypes.number,
};
