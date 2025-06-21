import "./styles.css";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import { useState, useEffect } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  // 🔍 Filters
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  // Load saved data
  useEffect(() => {
    const storedTasks = localStorage.getItem("taskflow-tasks");
    if (storedTasks) setTasks(JSON.parse(storedTasks));

    const savedTheme = localStorage.getItem("taskflow-theme");
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("taskflow-tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("taskflow-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Task actions
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
    if (taskToEdit && taskToEdit.id === id) setTaskToEdit(null);
  };

  const startEditTask = (task) => {
    setTaskToEdit(task);
  };

  const saveEditedTask = (updatedTask) => {
    const updatedTasks = tasks.map((t) =>
      t.id === updatedTask.id ? updatedTask : t
    );
    setTasks(updatedTasks);
    setTaskToEdit(null);
  };

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // 🧠 Apply filters
  const filteredTasks = tasks.filter((task) => {
    const matchesStatus =
      statusFilter === "All" || task.status === statusFilter;
    const matchesPriority =
      priorityFilter === "All" || task.priority === priorityFilter;
    return matchesStatus && matchesPriority;
  });

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <TaskForm
        onAddTask={addTask}
        taskToEdit={taskToEdit}
        onSaveEdit={saveEditedTask}
      />
      <FilterBar
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
      />
      <TaskList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onEdit={startEditTask}
      />
    </div>
  );
}
