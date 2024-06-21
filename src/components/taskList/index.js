import React from 'react';
import Task from '../task';

const TaskList = ({ tasks, handleEdit, deleteTask }) => {
  return (
    <div className="task-list" >
      {tasks.map((task,) => (
        <Task key={task.id} task={task} handleEdit={handleEdit} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TaskList;
