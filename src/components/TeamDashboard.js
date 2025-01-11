import React from 'react';

const TeamDashboard = ({ data }) => {
  const assignBadge = (team) => {
    const teamData = data.filter((item) => item.team === team);
    const totalGood = teamData.reduce((sum, item) => sum + item.good_count, 0);
    if (totalGood > 50000) return '🏆 Top Performer';
    if (totalGood > 25000) return '⭐ Rising Star';
    return '🎯 Achiever';
  };

  const badgeColors = {
    '🏆 Top Performer': '#FFD700', // Gold
    '⭐ Rising Star': '#1E90FF',   // Blue
    '🎯 Achiever': '#32CD32',     // Green
  };

  const labels = [...new Set(data.map((item) => item.team))];

  return (
    <div className="team-dashboard">
      <h2>Team Performance Dashboard</h2>
      {labels.map((team, index) => {
        const badge = assignBadge(team);
        return (
          <div key={index}>
            <h3>
              {team}{' '}
              <span
                className="badge"
                style={{ backgroundColor: badgeColors[badge] || '#ffffff', color: '#000' }}
              >
                {badge}
              </span>
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default TeamDashboard;
