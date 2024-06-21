import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({
    name: '',
    email: '',
    imageUrl: '',
    title: '',
    status: '',
    description: '',
    id: Math.random()
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask({ name: '', email: '', imageUrl: '', title: '', status: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input type="text" name="name" placeholder="Name" value={task.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={task.email} onChange={handleChange} required />
      <input type="text" name="imageUrl" placeholder="Profile Image URL" value={task.imageUrl} onChange={handleChange} />
      <input type="text" name="title" placeholder="Title" value={task.title} onChange={handleChange} required />
      <input type="text" name="status" placeholder="Status" value={task.status} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={task.description} onChange={handleChange} required />
      <button type="submit">Add</button>
    </form>
  );
  
};

export default TaskForm;
