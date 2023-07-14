import style from './Comments.module.css';
import PropTypes from 'prop-types';
import formatDate from '../../../utils/formatDate';
// import Markdown from 'markdown-to-jsx';

export const Comments = ({comments}) => {
  console.log(comments);
  if (comments) {
    // const {author, body, created} = comments.data;
    const {data} = comments[1];
    console.log('data: ', data);

    // console.log('created: ', created);
    // console.log('body: ', body);
    // console.log('author: ', author);

    return (
      <ul className={style.list}>
        {
          comments.map((comment, i) => {
            const {author, body, created} = comment.data;
            console.log('author: ', author);
            console.log('body: ', body);
            console.log('created: ', created);
            if (author && body && created) {
              return (
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
                      Author: {author}
                  </span>
                  {
                    <span className={style.date}>
                      {formatDate(created)}
                    </span>
                  }
                </li>
              );
            } else {
              return (<li key='999'>----</li>);
            }
          })
        };
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
// 1689333887
// 1689284575
