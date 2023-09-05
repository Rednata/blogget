import style from './Comments.module.css';
import PropTypes from 'prop-types';
import formatDate from '../../../utils/formatDate';
// import Markdown from 'markdown-to-jsx';

export const Comments = ({postComments}) => {
  console.log();

  if (postComments) {
    return (
      postComments.length <= 1 ?
      <p>No comments</p> :
      <ul className={style.list}>
        {
          postComments.map((comment, i) => {
            const {author, body, created} = comment.data;

            return (
              author && body && created &&
              <li key={i} className={style.item}>
                <div className={style.body}>
                  {body}
                  {/* <Markdown options={{
                    overrides: {
                      a: {
                        props: {
                          target: '_blank',
                        },
                      },
                    }}
                  }>
                    {body}
                  </Markdown> */}
                </div>
                <span
                  className={style.author}>
                    Comment by {author}
                </span>
                {
                  <span className={style.date}>
                    {formatDate(created)}
                  </span>
                }
              </li>
            );
          })
        }
      </ul>);
  }
  // } else {
  //   return (
  //     <p >Loading....</p>
  //   );
  // }
};

Comments.propTypes = {
  postComments: PropTypes.array,
};


{/* comments.map((comment, ind) => {
            console.log();
            return (
              <p key={ind}>{comment.data.body}</p>
            )})}; */}
// 1689333887
// 1689284575
