// import React from 'react';
// import style from './TestInput.module.css';

import {useRef} from 'react';

export const TestInput = props => {
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current);
    console.log(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit} style={{padding: '50px'}}>
      <input
        ref={inputRef}
        style={{marginRight: '20px'}} >
      </input>
      <button>Log</button>
    </form>
  );
};
