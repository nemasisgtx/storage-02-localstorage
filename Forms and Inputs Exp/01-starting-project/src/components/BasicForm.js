import useInput from "../hooks/name-use-input";
const BasicForm = (props) => {
  const isNotEmpty = (value) => value.trim() !== "";
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(isNotEmpty);

    const classFirstNameHandler = firstNameIsValid
    ? "form-control invalid"
    : "form-control";
    const classLastNameHandler = firstNameIsValid
    ? "form-control invalid"
    : "form-control";
    const classEmailHandler = firstNameIsValid
    ? "form-control invalid"
    : "form-control";

  const submitHandler = (e) => {
    e.preventDefault();

  }
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
          {!firstNameIsValid && <p>First Name cannot be Empty.</p>}
        </div>
        <div className={classLastNameHandler}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {!lastNameIsValid && <p> Last Name cannot be Empty.</p>}
        </div>
        <div className={classEmailHandler}>
          <label htmlFor="name">Email Address</label>
          <input
            type="email"
            id="email"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {!emailIsValid && <p> Last Name cannot be Empty.</p>}
        </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
      </div>
    </form>
  );
};

export default BasicForm;
