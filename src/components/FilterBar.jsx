import React from "react";

const FilterBar = ({
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
}) => {
  return (
    <div className="filter-bar">
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="All">All Status</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>

      <select
        value={priorityFilter}
        onChange={(e) => setPriorityFilter(e.target.value)}
      >
        <option value="All">All Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>
  );
};

export default FilterBar;
