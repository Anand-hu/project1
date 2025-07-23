import React from 'react'

const MatchList = ({ matches }) => {
  if (matches.length === 0) {
    return <p>No matches scheduled yet.</p>
  }

  return (
    <ul className="match-list">
      {matches.map((match, idx) => (
        <li key={idx}>
          {match.teamA} 🆚 {match.teamB}
        </li>
      ))}
    </ul>
  )
}

export default MatchList
