import React from 'react';
import { useEffect } from 'react';

import classes from './Navigation.module.css';

const Navigation = (props) => {

  // let [count,setCount] = useEffect(() => {
  //   console.log('Effect');
  //   return () => {
  //     console.log('Cleanup');
  //   };
  // }, [count]);
  return (
<React.Fragment>
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
    </React.Fragment>
  );
};

export default Navigation;
