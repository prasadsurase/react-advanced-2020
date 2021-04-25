import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('hello world');

  const handleClick = () => {
    if (text === 'hello world') {
      setText('hola amigo');
    } else {
      setText('hello world');
    }
  }

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type="button" onClick={handleClick}>change text</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
