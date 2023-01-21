import React from "react";
import Buttons from "../UI/Button";
import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = props => {
    const addUserHandler = (event) =>{
        event.preventDefault();
    }
    // const username = props.event.target.value;
    // const age = props.event.target.value;
    return (
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input  id="username" type='text'></input>
            <label htmlFor="age">Age</label>
            <input  id="age" type='number'></input>
            <Buttons type="submit">Add User</Buttons>
        </form>
        </Card>
    );
}
export default AddUser;