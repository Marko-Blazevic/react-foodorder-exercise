import classes from './Input.module.css';

const Input = (props) => {
  return (
    <form className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input id={props.input.id} {...props.input} />
    </form>
  );
};

export default Input;
