import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const changeValue = (val) => {
    setValue(val);
  }

  return (
    <React.Fragment>
      <section>
        <h2> regular counters </h2>
        <h1>{value}</h1>
        <button className="btn" type="button" onClick={() => changeValue(0)}>reset</button>
        <button className="btn" type="button" onClick={() => changeValue(value + 1)}>increment</button>
        <button className="btn" type="button" onClick={() => changeValue(value - 1)}>decrement</button>
      </section>
    </React.Fragment>
  )
};

export default UseStateCounter;
