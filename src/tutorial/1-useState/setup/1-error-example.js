import React from 'react';

const ErrorExample = () => {
  let title = 'hello world';

  const handleClick = () => {
    console.log(title);
    title = "hola amigo";
  }

  return (
    <div>
      <h2>{title}</h2>
      <button type='button' className="btn" onClick={handleClick}>Change title</button>
    </div>
  );
};

export default ErrorExample;
