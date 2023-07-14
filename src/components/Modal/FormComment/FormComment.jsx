// import React from 'react';
import style from './FormComment.module.css';
import {useRef} from 'react';

export const FormComment = props => {
  const formRef = useRef(null);
  return (
    <form className={style.form} ref={formRef}>
      <label htmlFor="textComment" className={style.label}>
        Input Your comment here:
      </label>
      <textarea className={style.textarea} id='textComment'
        rows={10}
        cols={50}
      >
      </textarea>
      <button className={style.btn}>Submit</button>
    </form>);
};
