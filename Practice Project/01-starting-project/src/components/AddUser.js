import React from "react";

const AddUser = props => {
    const addUserHandler = (event) =>{
        event.preventDefault();
        const username = event.target.value;
        const age = event.target.value;
    }
    return (
        <form onSubmit={addUserHandler}>
            <label htmlFor="username"></label>
            <input value={username} id="username" type='text'></input>
            <label htmlFor="age"></label>
            <input value={age} id="age" type='number'></input>
            <button type="submit">Add User</button>
        </form>
    );
}
export default AddUser;