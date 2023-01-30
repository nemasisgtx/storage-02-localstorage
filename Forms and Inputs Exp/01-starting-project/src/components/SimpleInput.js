// import { useState } from "react";
import useInput from "../hooks/name-use-input";
import EmailInputHook from "../hooks/email-use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: inputNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: EmailIsValid,
    hasError: emailInputHasError,
    emailChangeHandler: emailChangedHandler,
    emailBlurHandler: inputBlurHandler,
    resetEmail: resetEmailInput,
  } = EmailInputHook((value) => value.trim() !== "");

  // const [enteredName, setEnteredName] = useState("");
  // const [nameInputTouched, setNameInputIsTouched] = useState(false);

  // const enteredNameIsValid = enteredName.trim() !== '';
  // const nameInputIsInvalid = !enteredNameIsValid && nameInputTouched;

  // const enteredEmailIsValid = enteredEmail.trim() !== "";
  // const emailInputIsInvalid = !enteredEmailIsValid && emailInputIsTouched;

  let formIsValid = false;
  if (inputNameIsValid && EmailIsValid) {
    // eslint-disable-next-line no-unused-vars
    formIsValid = true;
  }

  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };

  // const nameInputBlurHandler = () => {
  //   setNameInputIsTouched(true);
  // };

  // const emailInputChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  //   setEmailInputIsTouched(true);
  // };
  // const emailInputBlurHandler = () => {
  //   setEmailInputIsTouched(true);
  // };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // setValueIsTouched(true);
    // if (!enteredNameIsValid) {
    //   return;
    // }
    resetNameInput();
    resetEmailInput();
    // setEmailInputIsTouched(false);
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {!inputNameIsValid && (
          <p className="error-test">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Email Id</label>
        <input
          type="email"
          id="email"
          onChange={emailChangedHandler}
          onBlur={inputBlurHandler}
          value={enteredEmail}
        />
        {!EmailIsValid && (
          <p className="error-test">Email must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
