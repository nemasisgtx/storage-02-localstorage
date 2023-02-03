import React from 'react';
import AddUser from './components/Users/AddUser';
import { useState } from 'react';
import Userlist from './components/Users/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    // setUsersList((prevUsersList) => {
    //   return [
    //     ...prevUsersList,
    //     { name: uName, age: uAge, id: Math.random() },
    //   ];
    // });
    setUsersList([
      ...usersList,
      { name: uName, age: uAge, id: Math.random() },
    ]);
  };

  return (
    <div>
      <h1>Add Users</h1>
      <AddUser onAddUser={addUserHandler}/>
      <Userlist users={usersList} />
    </div>
  );
}

export default App;
