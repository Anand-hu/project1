import React, { useState } from 'react'
import MatchList from './components/MatchList'

const App = () => {
  const [matches, setMatches] = useState([])
  const [teamA, setTeamA] = useState('')
  const [teamB, setTeamB] = useState('')

  const addMatch = () => {
    if (teamA.trim() && teamB.trim()) {
      setMatches([...matches, { teamA, teamB }])
      setTeamA('')
      setTeamB('')
    }
  }

  return (
    <div className="app">
      <h1>🏆 Sports Match Tracker</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Team A"
          value={teamA}
          onChange={(e) => setTeamA(e.target.value)}
        />
        <input
          type="text"
          placeholder="Team B"
          value={teamB}
          onChange={(e) => setTeamB(e.target.value)}
        />
        <button onClick={addMatch}>Add Match</button>
      </div>
      <MatchList matches={matches} />
    </div>
  )
}

export default App
