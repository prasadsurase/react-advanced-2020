import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removePerson = (id) => {
    let updatedList = people.filter(person => person.id !== id);
    setPeople(updatedList);
  }

  return (
    <React.Fragment>
      {
        people.map((person) => {
          const {id, name} = person;
          return (
            <div key={id} className="item">
              <h4>{name}</h4>
              <button type="button" className="btn" onClick={() => removePerson(id)}>
                remove item
              </button>
            </div>
          );
        })
      }
      <button type="button" className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
