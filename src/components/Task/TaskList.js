import React from 'react';

import Task from './Task';
import classes from './TaskList.module.css';

const TaskList = (props) => {
  return (
    <ul className={classes['task-list']}>
      {props.tasks.map((task) => (
        <Task
          key={task.id}
          title={task.title}
          date={task.date}
          description={task.description}
        />
      ))}
    </ul>
  );
};

export default TaskList;
