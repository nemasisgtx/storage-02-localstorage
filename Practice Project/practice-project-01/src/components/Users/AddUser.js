import React from 'react';
import { useState } from 'react';
import Buttons from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const addAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
  };
  console.log(enteredUsername, enteredAge);
  setEnteredUsername('');
  setEnteredAge('');
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          onChange={addUsernameHandler}
          value={enteredUsername}
          id="username"
          type="text"
        ></input>
        <label htmlFor="age">Age</label>
        <input
          onChange={addAgeHandler}
          value={enteredAge}
          id="age"
          type="number"
        ></input>
        <Buttons type="submit">Add User</Buttons>
      </form>
    </Card>
  );
};
export default AddUser;
