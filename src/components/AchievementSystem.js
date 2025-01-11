import React from 'react';

const AchievementSystem = ({ data }) => {
  const calculateAchievements = (data) => {
    return data.map((item) => {
      const efficiency = (item.good_count / item.target_count).toFixed(2);
      const quality = (item.good_count / (item.good_count + item.reject_count)).toFixed(2);
      return {
        team: item.team,
        efficiency,
        quality,
        badge: efficiency >= 0.9 && quality >= 0.95 ? 'Gold Star' : 'None',
      };
    });
  };

  const achievements = calculateAchievements(data);

  return (
    <div className="achievement-system">
      <h2>Achievements</h2>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index}>
            {achievement.team}: {achievement.badge}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AchievementSystem;
