import style from './Content.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';
import {useState} from 'react';
import {Modal} from '../../../../Modal/Modal';

export const Content = ({id, title, author, markdown}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Text As='a'
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
        >
          {title}
        </Text>
      </Text>
      <Text As='a' href="#author"
        className={style.linkAuthor}
        color='orange'
        size={12}
        tsize={14}
      >{author}</Text>
      {isModalOpen &&
        <Modal
          markdown={markdown}
          title={title}
          author={author}
          id={id}
          closeModal={() => setIsModalOpen(false)}
        />}
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  id: PropTypes.string,
};

