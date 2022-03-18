import classes from './Cart.module.css';

const Cart = () => {
  return (
    <div>
      <div className={classes['cart-items']}></div>
      <div className={classes.total}>
        <h3>Total Amount:</h3>
        <h3>32.55</h3>
      </div>
      <div className={classes.actions}>
        <button>Close</button>
        <button>Order</button>
      </div>
    </div>
  );
};

export default Cart;
