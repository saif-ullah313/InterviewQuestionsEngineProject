// src/Components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
//import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/admin">Admin Panel</Link></li>
          {/* <li><Link to="/questions">Questions Management</Link></li> */}
          <li><Link to="/metrics">Overview Metrics</Link></li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
