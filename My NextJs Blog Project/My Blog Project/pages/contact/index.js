import { useState, useEffect } from "react";
import classes from "./contact-form.module.css";
const ContactPage = () => {
  const users = [
    {
      name: "",
      number: "",
      email: "",
    },
  ];

  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");

  const onNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const onEmailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const onNumberChangeHandler = (event) => {
    setEnteredNumber(event.target.value);
  };
  useEffect(() => {
    return () => {};
  }, []);
  const formSubmitHandler = () => {
    enteredName();
    enteredEmail();
    enteredNumber();
  };
  return (
    <form className={classes.form}>
      <section>
        <div className={classes.contact}>
          <h1>Enter Your Contact Details Below</h1>
          <label>Enter Name</label>
          <input
            onChange={onNameChangeHandler}
            type="text"
            className="contact-input"
          ></input>
          <label>Enter Email</label>
          <input
            onChange={onEmailChangeHandler}
            type="email"
            className="contact-input"
          ></input>
          <label>Enter Number</label>
          <input
            onChange={onNumberChangeHandler}
            type="text"
            className="contact-input"
          ></input>
          <button onClick={formSubmitHandler} className={classes.button}>
            Submit
          </button>
        </div>
      </section>
    </form>
  );
};
export default ContactPage;
