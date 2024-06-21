import React from 'react';
import "../../App.css"
import image from '../../assets/images.jpeg'
const Task = ({ task, handleEdit, deleteTask }) => {
  return (
    <div className="task" key={task.id}>
      <div className={`status ${task.status.toLowerCase()}`}>{task.status}</div>
      <h5 className='left'>{task.title}</h5>
      <p className='left para'>{task.description}</p>
      <div className="task-footer">
        <img src={image} alt={task.name} className="profile-img" />
        <div className='tag'>
          <p>{task.name}</p>
          <p>{task.email}</p>
        </div>
        <button className='editButton' onClick={() => handleEdit(task.id)}>Edit</button>
        <button className='deleteButton' onClick={() => deleteTask(task)}>Delete</button>
      </div>
    </div>
  );
};

export default Task;
