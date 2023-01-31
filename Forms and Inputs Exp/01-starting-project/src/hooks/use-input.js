import { useState } from "react";

const useInput = (enteredValue) => {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = enteredValue(inputValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setInputValue(event.target.value);
    setIsTouched(true);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };
  const reset = () => {
    setInputValue("");
    setIsTouched(false);
  };

  return {
    value: inputValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};
export default useInput;
