import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {uiSliceActions} from '../store/ui-slice'; 

const CartButton = (props) => {
  const cartQuantity = useSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(uiSliceActions.toggle())
  }
  return (
    <button onClick={toggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
