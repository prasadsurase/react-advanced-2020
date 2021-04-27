import React, { useEffect } from 'react';

const Modal = (props) => {
  const {modalContent, closeModal} = props;

  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000)
  });

  return (
    <div className="modal">
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;
