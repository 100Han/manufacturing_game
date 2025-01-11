import React from 'react';

const TeamProfiles = ({ data }) => {
  const calculatePerformance = (team) => {
    const teamData = data.filter((item) => item.team === team);
    const totalGood = teamData.reduce((sum, item) => sum + item.good_count, 0);
    const totalReject = teamData.reduce((sum, item) => sum + item.reject_count, 0);
    const totalTarget = teamData.reduce((sum, item) => sum + item.target_count, 0);
    const efficiency = (totalGood / totalTarget).toFixed(2);
    const quality = (totalGood / (totalGood + totalReject)).toFixed(2);
    return { totalGood, totalReject, totalTarget, efficiency, quality };
  };

  const assignBadge = (efficiency, quality) => {
    if (efficiency >= 0.9 && quality >= 0.95) return '🏆 Gold Badge';
    if (efficiency >= 0.8) return '⭐ Silver Badge';
    return '🎖 Bronze Badge';
  };

  const teams = [...new Set(data.map((item) => item.team))];

  return (
    <div className="team-profiles">
      <h2>Team Profiles</h2>
      {teams.map((team, index) => {
        const performance = calculatePerformance(team);
        const badge = assignBadge(performance.efficiency, performance.quality);

        return (
          <div key={index} className="team-profile">
            <h3>
              {team} {badge}
            </h3>
            <p>
              <strong>Total Good:</strong> {performance.totalGood}
            </p>
            <p>
              <strong>Total Reject:</strong> {performance.totalReject}
            </p>
            <p>
              <strong>Total Target:</strong> {performance.totalTarget}
            </p>
            <p>
              <strong>Efficiency:</strong> {performance.efficiency}
            </p>
            <p>
              <strong>Quality:</strong> {performance.quality}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default TeamProfiles;
