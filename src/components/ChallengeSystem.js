// src/components/ChallengeSystem.js
import React, { useState } from 'react';

const ChallengeSystem = () => {
  const [challenges, setChallenges] = useState([]);
  const [form, setForm] = useState({ name: '', metric: 'efficiency', duration: 'day' });

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const createChallenge = () => {
    setChallenges([...challenges, { ...form, id: challenges.length + 1 }]);
    setForm({ name: '', metric: 'efficiency', duration: 'day' });
  };

  return (
    <div>
      <h2>Challenge System</h2>
      <div>
        <input
          name="name"
          value={form.name}
          onChange={handleFormChange}
          placeholder="Challenge Name"
        />
        <select name="metric" value={form.metric} onChange={handleFormChange}>
          <option value="efficiency">Efficiency</option>
          <option value="quality">Quality</option>
        </select>
        <select name="duration" value={form.duration} onChange={handleFormChange}>
          <option value="day">Day</option>
          <option value="week">Week</option>
        </select>
        <button onClick={createChallenge}>Create Challenge</button>
      </div>

      <h3>Active Challenges</h3>
      <ul>
        {challenges.map((challenge) => (
          <li key={challenge.id}>
            {challenge.name} - {challenge.metric} ({challenge.duration})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChallengeSystem;
