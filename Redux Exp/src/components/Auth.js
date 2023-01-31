import classes from './Auth.module.css';
import { useState } from 'react';

const Auth = () => {
const [email , setEmail] = useState("");
const [password, setPassword] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log('form submitted');
    setEmail('');
    setPassword('');
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={formSubmitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input value={email} onChange={emailHandler} type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input value={password} type='password' id='password' onChange={passwordHandler} />
          </div>
          <button >Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
