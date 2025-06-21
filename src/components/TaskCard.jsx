import React from "react";

const TaskCard = ({ task, onDelete, onEdit }) => {
  return (
    <div className="task-card" data-status={task.status}>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <div className={`priority ${task.priority}`}>
        {task.priority} Priority
      </div>
      <p>
        <strong>Status:</strong> {task.status}
      </p>

      <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.75rem" }}>
        <button
          style={{
            backgroundColor: "#0077b6",
            color: "#fff",
            border: "none",
            padding: "0.4rem 0.8rem",
            borderRadius: "6px",
            cursor: "pointer",
          }}
          onClick={() => onEdit(task)}
        >
          ✏️ Edit
        </button>

        <button
          style={{
            backgroundColor: "#e63946",
            color: "#fff",
            border: "none",
            padding: "0.4rem 0.8rem",
            borderRadius: "6px",
            cursor: "pointer",
          }}
          onClick={() => onDelete(task.id)}
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
