import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import {uiSliceActions} from '../store/ui-slice'; 

const CartButton = (props) => {
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(uiSliceActions.toggle())
  }
  return (
    <button onClick={toggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
