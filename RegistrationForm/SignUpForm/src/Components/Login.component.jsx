// src/Components/Login.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Login = () => {
  const [log, setLog] = useState({ userEmail: '', password: '' });
  const [loginErrors, setLoginErrors] = useState({});

  
  const navigate = useNavigate();

  const loginPost = (e) => {
    setLog({ ...log, [e.target.name]: e.target.value });
  };


  const validateLogin = () => {
    const newErrors = {};
    if (!log.userEmail) newErrors.userEmail = "Email is required";
    if (!log.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const validationErrors = validateLogin();
    if (Object.keys(validationErrors).length > 0) {
      setLoginErrors(validationErrors);
      return;
    }
    setLoginErrors({});
    try {
      const res = await axios.post('http://localhost:8021/api/Users/Login', {
        userEmail: log.userEmail,
        password: log.password
      });

      alert('User logged in successfully');
      navigate('/dashboard');
      console.log(res.data);
    } catch (err) {
      console.error(err);
      if (err.response && err.response.status === 401) {
        // Assuming 401 is the status code for unauthorized (incorrect email/password)
        setLoginErrors({ general: 'Email or password is incorrect' });
         
      } else {
        alert('Error logging in user');
        
      }
    }
  };

  return (
    <div className="Login-form">
      <h1>LogIn</h1>
      <form onSubmit={handleLogin}>
        <div className="fields">
          <label><i className="fa-solid fa-envelope"></i></label>
          <input
            type="text"
            name="userEmail"
            placeholder="Enter Your Email"
            className="inputs input2"
            onChange={loginPost}
            value={log.userEmail}
            required
          />
          {loginErrors.userEmail && <p className="error">{loginErrors.userEmail}</p>}
        </div>
        <div className="fields">
          <label><i className="fa-solid fa-lock"></i></label>
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            className="inputs input2"
            onChange={loginPost}
            value={log.password}
            required
          />
          {loginErrors.password && <p className="error">{loginErrors.password}</p>}
        </div>
        {loginErrors.general && <p className="error">{loginErrors.general}</p>}
        <button type="submit" className="black-button" style={{ marginLeft: '8vw' }}>LogIn</button>
      </form>
    </div>
  );
};

export default Login;
