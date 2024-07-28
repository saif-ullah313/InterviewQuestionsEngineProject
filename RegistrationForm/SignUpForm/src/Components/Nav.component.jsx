// src/Components/NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <>
    <header className="NavBar" >
      <h2>Interview Questions Generator</h2>
      <div className="Header-right" style={{marginLeft:'50vw'}}>
        <Link to="/signup" className="SignUp-Button">SignUp</Link>
        <Link to="/login" className="Login-Button">LogIn</Link>
        
      </div>
    </header>
    <Outlet/>
    </>
  );
};

export default NavBar;
