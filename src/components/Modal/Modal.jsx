import style from './Modal.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as CloseIcon} from './img/close.svg';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import {useState, useEffect, useRef} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import {Comments} from './Comments/Comments';
import {FormComment} from './FormComment/FormComment';

export const Modal = ({id, markdown, closeModal}) => {
  const overlayRef = useRef(null);
  const [isCloseClick, setIscloseClick] = useState(false);

  const [author, title, postComments] = useCommentsData(id);

  if (postComments) {
    console.log('author: ', author);
    console.log('title: ', title);
    console.log('postComments: ', postComments);
  }

  const handleClick = ({target}) => {
    // console.log(target);
    if (target === overlayRef.current) {
      closeModal();
    }
  };

  const escapeDown = ({code}) => {
    if (code === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', escapeDown);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', escapeDown);
    };
  }, []);

  return ReactDOM.createPortal(
      !isCloseClick &&
      <div className={style.overlay} ref={overlayRef}>
        <div className={style.modal}>
          <h2 className={style.title}>{title}</h2>

          <div className={style.content}>
            <Markdown options={{
              overrides: {
                a: {
                  props: {
                    target: '_blank',
                  },
                },
              }}
            }>
              {markdown}
            </Markdown>
          </div>
          <p className={style.author}>{author}</p>

          <FormComment />
          <Comments postComments={postComments} />

          <button
            className={style.close}
            onClick={() => setIscloseClick(true)}>
            <CloseIcon/>
          </button>
        </div>
      </div>,
      document.getElementById('modal-root'),
  );
};


Modal.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
};
