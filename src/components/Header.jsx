import React from "react";

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className={`app-header ${darkMode ? "dark" : ""}`}>
      <h1>🗂️ Taskflow Pro</h1>
      <p>Manage your tasks like a pro.</p>
      <button className="theme-toggle" onClick={toggleDarkMode}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
