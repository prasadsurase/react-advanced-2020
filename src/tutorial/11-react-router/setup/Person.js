import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const {id} = useParams();
  const [name, setName] = useState('');

  useEffect(() => {
    const person = data.find((person) => person.id === parseInt(id));
    setName(person.name);
  }, []);

  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default Person;
