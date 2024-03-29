/* eslint-disable no-unused-vars */
import style from './Modal.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as CloseIcon} from './img/close.svg';
// import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import {useEffect, useRef} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import {Comments} from './Comments/Comments';
import {FormComment} from './FormComment/FormComment';
import {useSelector} from 'react-redux';
import PreLoader from '../../UI/PreLoader';
import {useNavigate, useParams} from 'react-router-dom';

export const Modal = () => {
  const {id, page} = useParams();
  const navigate = useNavigate();

  const overlayRef = useRef(null);

  const {post, comments} = useCommentsData(id);
  const {author, title} = post;

  const status = useSelector(state => state.comments.status);
  const error = useSelector(state => state.comments.error);

  const handleClick = ({target}) => {
    if (target === overlayRef.current) {
      // closeModal();
      navigate(`/category/${page}`);
    }
  };

  const escapeDown = ({code}) => {
    if (code === 'Escape') {
      // closeModal();
      // navigate(-1);
      navigate(`/category/${page}`);
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
      <div className={style.overlay} ref={overlayRef}>
        <div className={style.modal}>
          {status === 'loading' && <PreLoader size={200}/>}
          {status === 'error' && `${error}`}
          {status === 'loaded' && (
            <>
              <h2 className={style.title}>{title}</h2>
              <div className={style.content}>
                {/* <Markdown options={{
                  overrides: {
                    a: {
                      props: {
                        target: '_blank',
                      },
                    },
                  }}
                }>
                  {markdown}
                </Markdown> */}
              </div>
              <p className={style.author}>{author}</p>

              <FormComment />
              <Comments comments={comments} />
            </>
          )}

          <button
            className={style.close}
            onClick={() => navigate(`/category/${page}`)}
          >
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
