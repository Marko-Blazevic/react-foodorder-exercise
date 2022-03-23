import { useRef, useState } from 'react';
import classes from './MealItemForm.module.css';
import Input from './Input';

const MealItemForm = (props) => {
  const [enteredAmountIsValid, setEnteredAmounIsValid] = useState(true);
  const amountInputRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const enteredInputAmount = amountInputRef.current.value;
    const enteredInputAmountNumber = +enteredInputAmount;

    if (
      enteredInputAmountNumber < 1 ||
      enteredInputAmount.trim().length === 0 ||
      enteredInputAmountNumber > 5
    ) {
      setEnteredAmounIsValid(false);
      return;
    }
    props.onAddToCart(enteredInputAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input
        ref={amountInputRef}
        onSubmit={onSubmitHandler}
        label='Amount:'
        input={{
          id: 'amount' + props.id,
          type: 'number',
          defaultValue: '1',
          min: '1',
          max: '5',
          step: '1',
        }}
      />
      <button>+ Add</button>
      {!enteredAmountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
