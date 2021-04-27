import React, { useState, useReducer, useRef, useEffect } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import { reducer } from './reducer';
const defaultState = {
  people: data,
  isModalOpen: false,
  modalContent: ''
};

const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);

  const refNameInput = useRef(null);

  useEffect(() => {
    refNameInput.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name){
      const person = {id: new Date().getTime().toString(), name}
      dispatch({type: 'ADD_ITEM', person });
      setName('');
    } else {
      dispatch({type: 'NO_VALUE'});
    }
  };

  const closeModal = () => {
    dispatch({type: 'CLOSE_MODAL'});
  };

  return (
    <React.Fragment>
      {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal}/>}
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} ref={refNameInput} />
        <button type="submit" className="btn">submit</button>
      </form>
      {state.people.map((person) => {
        const {id, name} = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn" onClick={() => {dispatch({type: 'REMOVE_ITEM', id: person.id })}}>remove</button>
          </div>
        );

      })}
    </React.Fragment>
  );
};

export default Index;
