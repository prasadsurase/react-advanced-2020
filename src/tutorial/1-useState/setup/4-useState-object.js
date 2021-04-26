import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({id: 1, name: 'Prasad', age: 34, message: 'hello world'});

  const [name, setName] = useState('Prasad');
  const [age, setAge] = useState(34);
  const [message, setMessage] = useState('Hello World');

  const changeMessage = () => {
    setMessage('hola amigo');
  };

  return (
    <>
    <h3>{person.id}</h3>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{message}</h3>
    <button type="button" className="btn" onClick={changeMessage}>change message</button>
    </>
  );
};

export default UseStateObject;
