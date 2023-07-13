import style from './Modal.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as CloseIcon} from './img/close.svg';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import {useEffect, useRef} from 'react';

export const Modal = ({markdown, title, author, closeModal}) => {
  const overlayRef = useRef(null);
  const closeSvgRef = useRef(null);

  const handleClick = ({target}) => {
    console.dir(target);
    if (target === overlayRef.current ||
        target === closeSvgRef.current) {
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

          <button className={style.close}>
            <CloseIcon ref={closeSvgRef}/>
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
