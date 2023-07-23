import {useState} from 'react';
import style from './FormComment.module.css';
import {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateComment} from '../../../store';

export const FormComment = props => {
  const [isForm, setIsForm] = useState(false);
  const [isBtn, setIsBtn] = useState(true);

  const value = useSelector(state => state.comment);

  const dispatch = useDispatch();

  const formRef = useRef(null);
  const textareaRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(formRef.current.сomment.value);
  };

  const handleChange = (e) => {
    dispatch(updateComment(e.target.value));
  };

  const showForm = () => {
    setIsForm(true);
    setIsBtn(false);
    setTimeout(() => {
      textareaRef.current.focus();
    }, 0);
  };

  return (
    <>
      {isForm &&
      <form className={style.form} ref={formRef} onSubmit={handleClick}>
        <label htmlFor="сomment" className={style.label}>
        Input Your comment here:
        </label>
        <textarea className={style.textarea} id='сomment'
          rows={5}
          cols={40}
          ref={textareaRef}
          value={value}
          onChange={handleChange}
        >
        </textarea>
        <button className={style.btn}>Submit</button>
      </form>
      }
      {
        isBtn &&
          <button
            className={style.btn}
            onClick={showForm}>
            Написать комментарий
          </button>
      }
    </>
  );
};

{/* <form className={style.form} ref={formRef} onSubmit={handleClick}>
      <label htmlFor="сomment" className={style.label}>
        Input Your comment here:
      </label>
      <textarea className={style.textarea} id='сomment'
        rows={5}
        cols={40}
      >
      </textarea>
      <button className={style.btn}>Submit</button>
    </form>); */}
