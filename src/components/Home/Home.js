import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  const emailData = localStorage.getItem('email');
  return (
    <Card className={classes.home}>
      <h1>MAIN PAGE!</h1>
      <h1>{emailData}</h1>
      <h1>Welcome back!</h1>
    </Card>
  );
};

export default Home;
