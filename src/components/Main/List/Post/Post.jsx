import style from './Post.module.css';
import PropTypes from 'prop-types';
// import Rating from './Rating';
import Time from './Time';
import Content from './Content';
import {DeleteBtn} from './DeleteBtn/DeleteBtn';
import {Thumbnail} from './Thumbnail/Thumbnail';

export const Post = ({data}) => {
  const {
    title,
    author,
    thumbnail,
    created: date} = data;

  return (
    <li className={style.post}>
      <Thumbnail
        thumbnail={thumbnail}
        title={title}/>
      <DeleteBtn />
      <Content author={author} title={title} />
      {/* <Rating ups={ups}/> */}
      <Time date={date} />
    </li>);
};

Post.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
};
