// import React from 'react';
import style from './FormComment.module.css';
import {useRef} from 'react';

export const FormComment = props => {
  const formRef = useRef(null);

  const handleClick = () => {
    console.log(formRef.current.сomment.value);
  };

  return (
    <form className={style.form} ref={formRef} onSubmit={handleClick}>
      <label htmlFor="сomment" className={style.label}>
        Input Your comment here:
      </label>
      <textarea className={style.textarea} id='сomment'
        rows={5}
        cols={40}
      >
      </textarea>
      <button className={style.btn}>Submit</button>
    </form>);
};
