import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {
      window.removeEventListener('resize', checkSize);
    }
  }, []);

  return (
    <React.Fragment>
      <h2>Window</h2>
      <h4>{size} PX</h4>
    </React.Fragment>
  );
};

export default UseEffectCleanup;
