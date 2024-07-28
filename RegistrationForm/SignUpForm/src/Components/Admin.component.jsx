
import React, { useState } from 'react';
import axios from 'axios';
import './Adminlogin.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8021/api/Admin/login', {
        username,
        password,
      });
      // Handle successful login, e.g., store token in localStorage or state
      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Login failed:', error);
      setError('Invalid username or password');
    }
  };

  return (
    <div className="admin-login-container">
      <h1>Admin Login</h1>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {error && <div className="error-message">{error}</div>}
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;