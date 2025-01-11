import React, { useState } from 'react';
import rawData from './data.json';
import ChallengeSystem from './components/ChallengeSystem';
import TeamDashboard from './components/TeamDashboard';
import Leaderboard from './components/Leaderboard';
import AchievementSystem from './components/AchievementSystem';
import TimelineView from './components/TimelineView';
import TeamProfiles from './components/TeamProfiles';
import RealTimeUpdates from './components/RealTimeUpdates';
import './App.css';
import './Animation.css';

function App() {
  const [manufacturingData, setManufacturingData] = useState(rawData);

  return (
    <div className="App">
      <h1>Manufacturing Performance Game</h1>
      <ChallengeSystem />
      <RealTimeUpdates data={manufacturingData} setData={setManufacturingData} />
      <TeamDashboard data={manufacturingData} />
      <Leaderboard data={manufacturingData} />
      <AchievementSystem data={manufacturingData} />
      <TimelineView data={manufacturingData} />
      <TeamProfiles data={manufacturingData} />
    </div>
  );
}

export default App;
