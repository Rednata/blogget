// import style from './AuthLoader.module.css';
import RingLoader from 'react-spinners/RingLoader';

export const AuthLoader = props => {
  console.log();
  return (
    <RingLoader color='#cc6633' css={{display: 'block'}} size={30} />);
};
