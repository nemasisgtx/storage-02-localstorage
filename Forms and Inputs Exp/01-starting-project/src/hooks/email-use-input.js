import { useState } from "react";

const EmailInputHook = (enteredValue) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsTouched, setEmailIsTouched] = useState(false);

  const emailIsValid = enteredValue(enteredEmail);
  const hasError = !emailIsValid && emailIsTouched;

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    setEmailIsTouched(true);
  };
  const emailBlurHandler = () => {
    setEmailIsTouched(true);
  };
  const resetEmail = () => {
    setEnteredEmail("");
    setEmailIsTouched(false);
  };
  return {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError,
    emailChangeHandler,
    emailBlurHandler,
    resetEmail,
  };
};
export default EmailInputHook;
