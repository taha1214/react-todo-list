import React, { useState } from 'react';
import TaskForm from './components/taskForm/index';
import TaskList from './components/taskList/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // const editTask = (updatedTask) => {
  //   setTasks(tasks.map(task => (task === updatedTask ? updatedTask : task)));
  // };


  const editTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };


  const handleEdit = (id) => {
    const updatedTask = { id, name: tasks.name , description: tasks.description, email: tasks.email, imageUrl: tasks.imageUrl,
      title:tasks.title, status: tasks.status
      };
    editTask(updatedTask);
  };

  // const editTask = tasks.map((updatedTask) => {
  //   return id == updatedTask.id 
  //   ? {
  //     ...updatedTask, 
  //     title: title,
  //     email: email,
  //     description : description,
  //     name: name,
  //     imageUrl: imageUrl,
  //     status: status,
      
  //   } 
  //   : updatedTask;
  // });

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter(task => task !== taskToDelete));
  };

  return (
    <div className="app">
      <h1>TODO APP</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} editTask={handleEdit} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
