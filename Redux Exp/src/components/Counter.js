import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/shop";
import { useState } from "react";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const [inputAmount, setInputAmount] = useState(0);

  const incrementCounterHandler = () => {
    dispatch(counterActions.Increment());
  };

  const decrementCounterHandler = () => {
    dispatch(counterActions.Decrement());
  };

  const increaseCounterHandler = () => {
    dispatch(counterActions.Increase(inputAmount));
  };

  const increaseInputHandler = (event) => {
    const value = event.target.value;
    setInputAmount(value);
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.Toggle());
  };

  const resetCounterHandler = () => {
    dispatch(counterActions.Reset());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && (
        <div className={classes.value}>
          {inputAmount !== isNaN ? counter : alert("Please enter a number.")}
        </div>
      )}
      <div>
        <button onClick={incrementCounterHandler}>Increment Counter</button>
        <button onClick={decrementCounterHandler}>Decrement Counter</button>
        <div>
          <input onChange={increaseInputHandler} placeholder="Inp"></input>
          <button onClick={increaseCounterHandler}>
            Increase Counter by {inputAmount}
          </button>
        </div>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={resetCounterHandler}>Reset Counter</button>
    </main>
  );
};

export default Counter;
