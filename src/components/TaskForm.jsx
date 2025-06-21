import React, { useState } from "react";

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [status, setStatus] = useState("To Do");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      status,
      createdAt: new Date().toISOString(),
    };

    onAddTask(newTask);

    // Clear form
    setTitle("");
    setDescription("");
    setPriority("Low");
    setStatus("To Do");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h3>Create New Task</h3>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>To Do</option>
        <option>In Progress</option>
        <option>Done</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
