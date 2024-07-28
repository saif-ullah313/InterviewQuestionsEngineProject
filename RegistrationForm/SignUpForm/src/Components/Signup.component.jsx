// src/Components/Signup.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
const Signup = () => {
  const [sign, setSign] = useState({
    firstName: '', lastName: '', userEmail: '', password: '', confirmPassword: '', contactNumber: '', roleSelection: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const signUpPost = (e) => {
    setSign({ ...sign, [e.target.name]: e.target.value });
  };

  const validateSignUp = () => {
    const newErrors = {};
    if (!sign.firstName) newErrors.firstName = "First name is required";
    if (!sign.lastName) newErrors.lastName = "Last name is required";
    if (!sign.userEmail) newErrors.userEmail = "Email is required";
    if (!sign.password) newErrors.password = "Password is required";
    if (sign.password !== sign.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    if (!sign.contactNumber) newErrors.contactNumber = "Contact number is required";
    if (!sign.roleSelection) newErrors.roleSelection = "Role selection is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateSignUp();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    try {
      await axios.post('http://localhost:8021/api/Users/Registration', {
        firstName: sign.firstName,
        lastName: sign.lastName,
        userEmail: sign.userEmail,
        password: sign.password,
        confirmPassword: sign.confirmPassword,
        contactNumber: sign.contactNumber,
        roleSelection: sign.roleSelection
      });

      setSign({ firstName: '', lastName: '', userEmail: '', password: '', confirmPassword: '', contactNumber: '', roleSelection: '' });
      alert('User registered successfully');
      navigate('/login');  // Navigate to the login page
    } catch (err) {
      console.error(err);
      alert('Error registering user');
    }
  };

  return (
    <div className="SignUp">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="FirstLastName">
          <div>
            <label><i className="fa-solid fa-user"></i></label>
            <input
              type="text"
              name="firstName"
              className="formName"
              placeholder="Enter the First Name"
              onChange={signUpPost}
              value={sign.firstName}
              required
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>
          <div>
            <label><i className="fa-solid fa-user"></i></label>
            <input
              type="text"
              name="lastName"
              className="formName"
              placeholder="Enter the Last Name"
              onChange={signUpPost}
              value={sign.lastName}
              required
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>
        </div>
        <label><i className="fa-solid fa-envelope"></i></label>
        <input
          type="email"
          name="userEmail"
          className="formEmail"
          placeholder="example@gmail.com"
          onChange={signUpPost}
          value={sign.userEmail}
          required
        />
        {errors.userEmail && <p className="error">{errors.userEmail}</p>}
        <label><i className="fa-solid fa-lock" /></label>
        <input
          type="password"
          name="password"
          className="formPassword"
          placeholder="Enter Your Password"
          onChange={signUpPost}
          value={sign.password}
          required
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <label><i className="fa-solid fa-lock" /></label>
        <input
          type="password"
          name="confirmPassword"
          className="formConfirmPassword"
          placeholder="Enter Your Confirm Password"
          onChange={signUpPost}
          value={sign.confirmPassword}
          required
        />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        <label><i className="fa-solid fa-mobile"></i></label>
        <input
          type="tel"
          name="contactNumber"
          className="formContactNumber"
          placeholder="Enter Your Phone Number"
          onChange={signUpPost}
          value={sign.contactNumber}
          required
        />
        {errors.contactNumber && <p className="error">{errors.contactNumber}</p>}
        <div className="RoleSelection">
          <label><i className="bi bi-check2-square"></i></label>
          <div className="RoleOption">
            <input
              type="radio"
              name="roleSelection"
              value="candidate"
              checked={sign.roleSelection === 'candidate'}
              onChange={signUpPost}
            />
            <label>Candidate</label>
          </div>
          <div className="RoleOption">
            <input
              type="radio"
              name="roleSelection"
              value="interviewer"
              checked={sign.roleSelection === 'interviewer'}
              onChange={signUpPost}
            />
            <label>Interviewer</label>
          </div>
        </div>
        {errors.roleSelection && <p className="error">{errors.roleSelection}</p>}
        <button type="submit" className="black-button" style={{ marginLeft: '8vw' }}>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
