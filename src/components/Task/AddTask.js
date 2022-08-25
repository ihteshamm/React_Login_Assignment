import React, { useRef } from 'react';

import classes from './AddTask.module.css';
import Button from '../UI/Button/Button';

function AddTask(props) {
  const titleRef = useRef('');
  const descriptionRef = useRef('');
  const dateRef = useRef('');


  async function submitHandler(event) {
    console.log("Add Task");
    event.preventDefault();
    if(titleRef.current.value !== '' 
          && descriptionRef.current.value !== '' 
          && dateRef.current.value !== ''){
            const TaskData = {
              email:props.email,
              title: titleRef.current.value,
              description: descriptionRef.current.value,
              date:dateRef.current.value
            }
            await fetch('https://react-project-demo-fcab4-default-rtdb.firebaseio.com/MyTasks.json', {
              method: "POST",
              body: JSON.stringify(TaskData),
              Headers: {
                'content_Type': "application/json"
              }
            });
              window.alert("Task Added!");        
    }else{
      window.alert("Please Fill Form!!");        
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <h1 className={classes.label}>Adding New Task</h1>
      <div className={classes.control}>
        <label htmlFor='title'>Task Title </label>
        <input type='text' id='title' ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='Description'>Description</label>
        <textarea rows='5' id='opening-text' ref={descriptionRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor='date'>Task Date</label>
        <input type='text' id='date' ref={dateRef} />
      </div>
      <Button type="submit">Add Task</Button>
    </form>
  );
}

export default AddTask;
