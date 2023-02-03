import { useState } from "react";
import Output from "./Output";
import Async from "./Async";
import classes from "./Greeting.module.css";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeHandler = () => {
    setChangedText(true);
  };
  return (
    <>
      <div className={classes.intro}>
        <h1>Hello King!</h1>
        {!changedText && <Output>Lets Kill Some Monsters.</Output>}
        {changedText && <Output>Changed!</Output>}
        <button onClick={changeHandler}>Click Me!</button>
      </div>
      <div className={classes.async}>
        <Async />
      </div>
    </>
  );
};

export default Greeting;
