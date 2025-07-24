import React from 'react'

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="header bounce-in">
      <div className="header-content">
        <h1>🏆 Sports Match Tracker</h1>
        <p>Track your favorite matchups with ease</p>
      </div>
      <div className="toggle-container">
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          <span className="slider round"></span>
        </label>
        <span>{darkMode ? '🌙 Dark' : '☀️ Light'}</span>
      </div>
    </header>
  )
}

export default Header
