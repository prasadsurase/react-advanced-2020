import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refMessageInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    refMessageInput.current.focus();
  })

  return (
    <React.Fragment>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="message" ref={refMessageInput}/>
        <button type="submit" className="btn">Submit</button>
      </form>
    </React.Fragment>
  );
};

export default UseRefBasics;
