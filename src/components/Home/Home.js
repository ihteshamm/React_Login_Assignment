import React, { useEffect, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import AddTask from '../Task/AddTask'
import TaskList from '../Task/TaskList';
import Button from '../UI/Button/Button';

const Home = () => {
  const emailData = localStorage.getItem('email');
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);


  useEffect(() => {
    FetchingTasks();
  }, [])

  //with async & await
  async function FetchingTasks() {
    setIsLoading(true);
    const response = await fetch('https://react-project-demo-fcab4-default-rtdb.firebaseio.com/MyTasks.json');
    if (response.ok) {
      setErrors(null);
      const data = await response.json();
      if (data !== null) {
        const MyTasks = [];
        for (const key in data) {
          if (emailData === data[key].email) {
            MyTasks.push({
              id: key,
              title: data[key].title,
              description: data[key].description,
              date: data[key].date
            });
          }
        }
        setTasks(MyTasks);
        FetchingTasks();
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setErrors("No data in database");
      }
    } else if (response.status === 404) {
      setIsLoading(false);
      setErrors(response.status);
    }
  }
  let content = 'No Task!';
  if (isLoading) {
    content = 'Loading. . .';
  } else {
    if (errors !== null) {
      content = 'Error Occur';
    } else {
      if (tasks.length === 0) {
        content = 'No Task';
      } else {
        if (tasks.length > 0) {
          content = <TaskList tasks={tasks} />
        }
      }
    }
  }


  return (
    <div>
      <Card className={classes.home}>
        <h3>MAIN PAGE!</h3>
        <h1>{emailData}</h1>
        <h3>Welcome back!</h3>
      </Card>
      <Card className={classes.home}>
        <AddTask email={emailData} />
      </Card>
      <Card className={classes.home}>
        <div>
          <Button onclick={FetchingTasks} > Fetch Tasks</Button>
        </div>
        <section>
          {content}
        </section>
      </Card>
    </div>
  );
};

export default Home;
