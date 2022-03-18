import classes from './Modal.module.css';
import Cart from '../Cart/Cart';
import React from 'react';

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};
const ModalOverlay = () => {
  return <Cart />;
};

const Modal = () => {
  return (
    <div className={classes.modal}>
      <Backdrop />
      <ModalOverlay />
    </div>
  );
};

export default Modal;
