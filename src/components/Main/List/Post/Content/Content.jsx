import style from './Content.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';

export const Content = ({title, author}) => (
  <div className={style.content}>
    <Text As='h2' className={style.title}>
      <Text As='a'
        className={style.linkPost}
        // color='grey2D'
        color='green'
        size={18}
        tsize={26}
        dsize={32}
        href="#post">
        {title}
      </Text>
    </Text>
    <Text As='a' href="#author"
      className={style.linkAuthor}
      color='orange'
      size={12}
      tsize={14}
    >{author}</Text>
  </div>
);

Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

