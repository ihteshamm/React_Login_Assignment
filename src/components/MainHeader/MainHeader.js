import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';
const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>Login Page!</h1>
      <Navigation 
        signup={props.signup}
        login={props.login}
        logout={props.logout}

        onSignup={props.onSignup}
        onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
