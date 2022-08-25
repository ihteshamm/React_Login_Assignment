import React from 'react';

import classes from './Task.module.css';

const Task = (props) => {
  return (
    <li className={classes.task}>
      <h2>{props.title}</h2>
      <h3>{props.date}</h3>
      <p>{props.description}</p>
    </li>
  );
};

export default Task;
