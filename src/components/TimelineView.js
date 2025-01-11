import React, { useState } from 'react';

const TimelineView = ({ data }) => {
  // State to manage the selected team filter
  const [teamFilter, setTeamFilter] = useState('All');

  // Filter data based on the selected team
  const filteredData =
    teamFilter === 'All' ? data : data.filter((item) => item.team === teamFilter);

  return (
    <div className="timeline-view">
      <h2>Interactive Timeline View</h2>
      
      {/* Dropdown for selecting a team */}
      <select value={teamFilter} onChange={(e) => setTeamFilter(e.target.value)}>
        <option value="All">All Teams</option>
        {/* Generate options dynamically based on unique team names */}
        {[...new Set(data.map((item) => item.team))].map((team) => (
          <option key={team} value={team}>
            {team}
          </option>
        ))}
      </select>

      {/* Display filtered data */}
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>
            <strong>Team:</strong> {item.team} | 
            <strong> Shift:</strong> {item.shift} | 
            <strong> Good:</strong> {item.good_count} | 
            <strong> Reject:</strong> {item.reject_count} | 
            <strong> Target:</strong> {item.target_count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimelineView;
