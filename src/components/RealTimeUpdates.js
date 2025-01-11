import React, { useEffect } from 'react';

const RealTimeUpdates = ({ data, setData }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedData = data.map((item) => ({
        ...item,
        good_count: item.good_count + Math.floor(Math.random() * 100),
        reject_count: item.reject_count + Math.floor(Math.random() * 10),
      }));
      setData(updatedData);
    }, 3000); // Updates every 3 seconds

    return () => clearInterval(interval);
  }, [data, setData]);

  return (
    <div className="real-time-updates">
      <h2>Real-Time Updates</h2>
      <p>Production data is being updated every 3 seconds...</p>
    </div>
  );
};

export default RealTimeUpdates;
