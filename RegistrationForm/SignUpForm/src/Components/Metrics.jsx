import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import './Metrics.css';

Chart.register(...registerables);

const Metrics = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [lastUpdated, setLastUpdated] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8021/api/Metric/GetallMetric');
        console.log('Metrics Response:', response.data);

        setTotalUsers(response.data.totalUsers);
        setActiveUsers(response.data.activeUsers);
        setLastUpdated(response.data.lastUpdated);
      } catch (error) {
        console.error('Error fetching metrics data:', error);
        setError('Failed to load metrics data');
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 60000); // Fetch data every minute

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="metrics-container">
      <h2>Overview Metrics</h2>
      {error && <div className="error-message">{error}</div>}
      <div className="metrics-grid">
        <div className="metrics-card">
          <h3>Total Users</h3>
          <p>{totalUsers}</p>
        </div>
        <div className="metrics-card">
          <h3>Active Users</h3>
          <p>{activeUsers}</p>
        </div>
        <div className="metrics-card">
          <h3>Last Updated</h3>
          <p>{new Date(lastUpdated).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
