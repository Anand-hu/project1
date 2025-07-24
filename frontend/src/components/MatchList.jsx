import React from 'react'

const MatchList = ({ matches }) => {
  if (!matches.length) {
    return <p className="empty fade-in">No matches added yet. Start tracking!</p>
  }

  return (
    <div className="match-list fade-in">
      <h2>📅 Scheduled Matches</h2>
      <ul>
        {matches.map((match) => (
          <li key={match.id}>
            <div className="match-card slide-up">
              <div>
                <span className="teams">
                  {match.teamA} <span className="vs">vs</span> {match.teamB}
                </span>
                <div className="type">🏅 {match.type}</div>
              </div>
              <span className="date">{match.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MatchList
