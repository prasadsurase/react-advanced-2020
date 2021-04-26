import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    document.title = `Hello world ${value}`
  });

  return (
    <React.Fragment>
      <h3>{value}</h3>
      <button className='btn' type='button' onClick={() => setValue(value + 1)}>click me!</button>
    </React.Fragment>
  );
};

export default UseEffectBasics;
