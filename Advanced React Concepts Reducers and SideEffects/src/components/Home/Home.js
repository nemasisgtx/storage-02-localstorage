import React from 'react';
import LabTest from '../MainHeader/LabTest';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <LabTest/>
    </Card>
  );
};

export default Home;
