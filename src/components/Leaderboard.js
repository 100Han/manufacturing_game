import React, { useEffect, useState } from 'react';
import '../Animation.css';

const Leaderboard = ({ data }) => {
  const [sortedTeams, setSortedTeams] = useState([]);

  useEffect(() => {
    const groupByTeam = (data) => {
      const grouped = {};
      data.forEach((item) => {
        if (!grouped[item.team]) {
          grouped[item.team] = { good_count: 0 };
        }
        grouped[item.team].good_count += item.good_count;
      });
      return grouped;
    };

    const groupedData = groupByTeam(data);

    const sorted = Object.entries(groupedData)
      .sort((a, b) => b[1].good_count - a[1].good_count)
      .map(([team, metrics], index) => ({
        rank: index + 1,
        team,
        ...metrics,
      }));

    setSortedTeams(sorted);
  }, [data]);

  const rankColors = ['#FFD700', '#C0C0C0', '#CD7F32']; // Gold, Silver, Bronze

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <ol>
        {sortedTeams.map((item, index) => (
          <li
            key={index}
            className="rank-change"
            style={{
              backgroundColor: rankColors[index] || '#87CEEB',
              color: index < 3 ? '#000' : '#fff',
              fontWeight: index < 3 ? 'bold' : 'normal',
            }}
          >
            {item.team} - <span className="score-change">{item.good_count}</span> goods produced
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;
