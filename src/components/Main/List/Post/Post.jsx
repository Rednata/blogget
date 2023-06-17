import style from './Post.module.css';
import PropTypes from 'prop-types';
import notphoto from './img/notphoto.jpg';
import Rating from './Rating';
import Time from './Time';
import Content from './Content';

export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;
  return (
    <li className={style.post}>
      <img className={style.img} src={notphoto} alt={title} />
      <Content author={author} title={title} />
      <Rating ups={ups}/>
      <Time date={date} />
    </li>);
};

Post.propTypes = {
  postData: PropTypes.object,
};
