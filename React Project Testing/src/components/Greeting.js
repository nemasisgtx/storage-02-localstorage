import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h2>Hello King!</h2>
      {!changedText && <Output>Lets Kill Some Monsters.</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changeHandler}>Click Me!</button>
    </div>
  );
};

export default Greeting;
