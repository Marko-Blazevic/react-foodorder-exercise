import classes from './MealItemForm.module.css';
import Input from './Input';

const MealItemForm = (props) => {
  return (
    <div className={classes.form}>
      <Input
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
    </div>
  );
};

export default MealItemForm;
