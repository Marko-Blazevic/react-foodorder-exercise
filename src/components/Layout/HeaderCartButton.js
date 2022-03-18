import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import React from 'react';

const CartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.showCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default CartButton;
