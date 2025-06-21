import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks, onDelete }) => {
  if (tasks.length === 0) {
    return <p>No tasks yet. Add one above!</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TaskList;
