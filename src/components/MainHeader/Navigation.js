import React from 'react';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.login && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.login && (
          <li>
            <a href="/wwe">Admin</a>
          </li>
        )}
        {(props.login && !props.signup && !props.logout) && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
        {(!props.login && props.signup && !props.logout) && (
          <li>
            <button onClick={props.onLogout}>Login!</button>
          </li>
        )}
        {(!props.login && !props.signup && props.logout) && (
          <li>
            <button onClick={props.onSignup}>New Account</button>
          </li>
        )}

      </ul>
    </nav>
  );
};

export default Navigation;
