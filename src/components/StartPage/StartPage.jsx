import style from './StartPage.module.css';
import {useSelector} from 'react-redux';

export const StartPage = props => {
  console.log();
  const token = useSelector(state => state.token.token);

  return (
    <div className={style.container}>
      <p className={style.start}>Стартовая страница</p>
      <p className={style.welcome}>Добро пожаловать!</p>
      {token ?
        <p className={style.checkedCategory}>Выберите категорию</p> :
        <p className={style.checkedCategory}>
          Войдите в учетную запись и выберите категорию
        </p>
      }
    </div>
  );
};
