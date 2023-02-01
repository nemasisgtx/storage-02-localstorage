import classes from './CartItem.module.css';
import { counterActions } from '../Shop/store';
import { useDispatch,useSelector } from 'react-redux';

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.cartCounter.counter);
  // const show = useSelector((state) => state.cartCounter.showCounter);
  
  const incrementCounterHandler = () => {
    dispatch(counterActions.Increment());
  };
  const decrementCounterHandler = () => {
    dispatch(counterActions.Decrement());
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        {counter && (<div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>)}
        <div className={classes.actions}>
          <button onClick={incrementCounterHandler}>+</button>
          <button onClick={decrementCounterHandler}>-</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
