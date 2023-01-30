import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const [inputAmount, setInputAmount] = useState(0);

  const incrementCounterHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrementCounterHandler = () => {
    dispatch({ type: "DECREMENT" });
  };
  const increaseCounterHandler = () => {
    dispatch({ type: "INCREASE", amount: inputAmount });
  };

  const increaseInputHandler = (event) => {
    setInputAmount(event.target.value);
  };
  const toggleCounterHandler = () => {
    dispatch({ type: "TOGGLE" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementCounterHandler}>Increment Counter</button>
        <button onClick={decrementCounterHandler}>Decrement Counter</button>
        <div>
        <input onChange={increaseInputHandler} placeholder='Enter a Number'></input>
        <button onClick={increaseCounterHandler}>Increase Counter by Input </button>
        </div>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
