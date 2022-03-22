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
      enteredInputAmountNumber.trim().length === 0
    ) {
      setEnteredAmounIsValid(false);
      return;
    }
  };

  return (
    <div className={classes.form}>
      <Input
        ref={amountInputRef}
        onSubmit={onSubmitHandler}
        label='Amount:'
        input={{
          id: 'amount' + props.id,
          type: 'number',
          defaultValue: '1',
          min: '1',
          step: '1',
        }}
      />
      <button>+ Add</button>
      {!enteredAmountIsValid && <p>Please enter a valid amount.</p>}
    </div>
  );
};

export default MealItemForm;
