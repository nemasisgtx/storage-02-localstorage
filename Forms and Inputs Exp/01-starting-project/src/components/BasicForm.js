import useInput from "../hooks/use-input";
import useEmailHook from "../hooks/use-email-input";

const BasicForm = (props) => {
  const isNotEmpty = (value) => value.trim() !== "";
  // const isEmail = (value) => {value.includes("@")}
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    valueChangeHandler: firstNameChangeHandler,
    hasError: firstNameHasError,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameResetHandler,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameResetHandler,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    emailChangeHandler,
    emailBlurHandler,
    resetEmail: emailResetHandler,
  } = useEmailHook(isNotEmpty);

  const classFirstNameHandler = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const classLastNameHandler = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const classEmailHandler = emailHasError
    ? "form-control invalid"
    : "form-control";

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    firstNameResetHandler();
    lastNameResetHandler();
    emailResetHandler();
    console.log(
      "FirstName:" +
        firstNameValue +
        " " +
        "LastName:" +
        lastNameValue +
        " " +
        "Email ID:" +
        " " +
        emailValue
    );
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={classFirstNameHandler}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">First Name cannot be Empty.</p>
          )}
        </div>
        <div className={classLastNameHandler}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text"> Last Name cannot be Empty.</p>
          )}
        </div>
        <div className={classEmailHandler}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && (
            <p className="error-text"> Email cannot be Empty.</p>
          )}
        </div>
        <div className="form-actions">
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </div>
    </form>
  );
};

export default BasicForm;
