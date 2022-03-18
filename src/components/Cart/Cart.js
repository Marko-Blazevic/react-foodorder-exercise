import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
  return (
    <Modal hideCart={props.onHideCart}>
      <div className={classes['cart-items']}>Sushi</div>
      <div className={classes.total}>
        <h4>Total Amount:</h4>
        <h4>32.55</h4>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>
          Close
        </button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
