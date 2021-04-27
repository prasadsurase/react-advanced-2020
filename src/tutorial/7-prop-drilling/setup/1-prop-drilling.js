import React, { useState } from 'react';
import { data } from '../../../data';

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removePerson =(id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }

  return (
    <React.Fragment>
      <h2>Prop Drilling</h2>
      <h3>List of People</h3>
      <List people={people} removePerson={removePerson}/>
    </React.Fragment>
  );
};

const List = (props) => {
  const {people} = props;

  return(
    <div className="items">
      {people.map((person) => {
        return <Person key={person.id} person={person} removePerson={props.removePerson}/>
      })}
    </div>
  );
};

const Person = (props) => {
  const {id, name} = props.person;

  return (
    <React.Fragment>
      <div className="item">
        <h4>{name}</h4>
        <button type="button" className="btn" onClick={() => props.removePerson(id)}>remove</button>
      </div>
    </React.Fragment>
  );
}

export default PropDrilling;
