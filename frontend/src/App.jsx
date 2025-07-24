import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import MatchList from './components/MatchList'

const App = () => {
  const [matches, setMatches] = useState([])
  const [teamA, setTeamA] = useState('')
  const [teamB, setTeamB] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode') === 'true'
    setDarkMode(savedTheme)
    document.body.classList.toggle('dark', savedTheme)
  }, [])

  // Update theme toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    localStorage.setItem('darkMode', !darkMode)
    document.body.classList.toggle('dark', !darkMode)
  }

  const addMatch = () => {
    if (!teamA.trim() || !teamB.trim()) {
      alert('Please enter both team names.')
      return
    }

    const newMatch = {
      id: Date.now(),
      teamA,
      teamB,
      date: new Date().toLocaleString(),
    }

    setMatches([newMatch, ...matches])
    setTeamA('')
    setTeamB('')
  }

  return (
    <div className={`app fade-in ${darkMode ? 'dark-mode' : ''}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="form-section slide-up">
        <input
          type="text"
          placeholder="Team A"
          value={teamA}
          onChange={(e) => setTeamA(e.target.value)}
        />
        <span className="vs">vs</span>
        <input
          type="text"
          placeholder="Team B"
          value={teamB}
          onChange={(e) => setTeamB(e.target.value)}
        />
        <button onClick={addMatch}>➕ Add Match</button>
      </div>
      <MatchList matches={matches} />
    </div>
  )
}

export default App
