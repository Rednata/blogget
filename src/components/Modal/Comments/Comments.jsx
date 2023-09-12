import style from './Comments.module.css';
import PropTypes from 'prop-types';
import Time from '../../Main/List/Post/Time';
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
              body &&
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
                  <Time className={style.date} date={created}>
                  </Time>
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

