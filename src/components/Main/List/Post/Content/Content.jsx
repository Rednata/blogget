/* eslint-disable no-unused-vars */
import style from './Content.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';
import {useState} from 'react';
import {Link, useParams} from 'react-router-dom';

export const Content = ({id, title, author, markdown}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {page} = useParams();

  const handleClickOnLinkPost = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Link
          className={style.linkPost}
          to={`/category/${page}/post/${id}`}>{title}
        </Link>
        {/* <a href="#post"
          onClick={handleClickOnLinkPost}
        >{title}</a> */}
      </Text>
      <Text As='a' href="#author"
        className={style.linkAuthor}
        color='orange'
        size={12}
        tsize={14}
      >{author}</Text>
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  id: PropTypes.string,
};


{/* <Text As='a'
  className={style.linkPost}
  // color='grey2D'
  color='green'
  size={18}
  tsize={26}
  dsize={32}
  href="#post"
  func={() => {
    setIsModalOpen(true);
  }
  }
> */}
// </Text>
