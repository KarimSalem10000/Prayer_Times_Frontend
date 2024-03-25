import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [prayerTimes, setPrayerTimes] = useState({});

  useEffect(() => {
    // Fetch prayer times when the component mounts
    fetchPrayerTimes();
  }, []);

  const fetchPrayerTimes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/prayer-times');
      console.log('Prayer times:', response.data);
      setPrayerTimes(response.data);
    } catch (error) {
      console.error('Error fetching prayer times:', error);
    }
  };

  return (
    <div className="App">
      <h1>Prayer Times</h1>
      <ul>
        {Object.entries(prayerTimes).map(([prayer, time]) => (
          <li key={prayer}>
            <strong>{prayer}:</strong> {time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
