import style from './ModalMessage.module.css';
import ReactDOM from 'react-dom';

export const ModalMessage = props => {
  console.log();
  return (
    ReactDOM.createPortal(
        <div className={style.authModal}>Ошибка входа в учетную запись</div>,
        document.getElementById('root'),
    )
  );
};
