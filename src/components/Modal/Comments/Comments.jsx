import style from './Comments.module.css';
import PropTypes from 'prop-types';
import formatDate from '../../../utils/formatDate';
// import Markdown from 'markdown-to-jsx';

export const Comments = ({comments}) => {
  console.log(comments);
  if (comments) {
    return (
      <ul className={style.list}>
        {
          comments.map((comment, i) => (
            <li key={i} className={style.item}>

              <div className={style.body}>
                {comment.data.body}
                {/* <Markdown options={{
                  overrides: {
                    a: {
                      props: {
                        target: '_blank',
                      },
                    },
                  }}
                }>
                  {comment.data.body}
                </Markdown> */}
              </div>
              <span
                className={style.author}>
                  Author: {comment.data.author}
              </span>
              <span className={style.date}>
                {formatDate(comment.data.created)}
              </span>
            </li>
          ))
        }
      </ul>);
  }
};

Comments.propTypes = {
  comments: PropTypes.array,
};


{/* comments.map((comment, ind) => {
            console.log();
            return (
              <p key={ind}>{comment.data.body}</p>
            )})}; */}
