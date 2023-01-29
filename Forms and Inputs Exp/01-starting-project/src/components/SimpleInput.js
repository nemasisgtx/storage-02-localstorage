import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [nameInputTouched, setNameInputIsTouched] = useState(true);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailInputIsTouched, setEmailInputIsTouched] = useState(true);
  // const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const enteredEmailIsValid = enteredEmail.trim() !== '';
  const emailInputIsInvalid = !enteredEmailIsValid && emailInputIsTouched;
  const nameInputIsInvalid = !enteredNameIsValid && nameInputTouched;

  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setNameInputIsTouched(true);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    setEmailInputIsTouched(true);
  };
  const emailInputBlurHandler = () => {
    setEmailInputIsTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setNameInputIsTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
    setEnteredName('');
    setEnteredEmail('');
  };
  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {!enteredNameIsValid && (
          <p className="error-test">Name must not be empty.</p>
        )}
      </div>
      <div className={nameInputClasses}>
        <label htmlFor="email">Email Id</label>
        <input
          type="text"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {!enteredEmailIsValid && (
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
