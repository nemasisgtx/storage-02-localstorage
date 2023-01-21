import classes from './Button.module.css';

const Buttons = (props) => {
  return (
    <div
      className={classes.button}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};
export default Buttons;
