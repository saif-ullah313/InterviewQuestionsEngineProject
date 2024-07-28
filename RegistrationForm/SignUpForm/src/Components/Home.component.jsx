// src/Components/Home.js

import React from 'react';
import './Home.css'
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className='backgroundcolor'>
     
      <div className='HomeHeading'>
      <h2 className='Heading1' >Interview Questions Search Engine</h2>
      <h3 className='Heading2' >Join us for preparation of Interview</h3>
      </div>
      <Outlet/>
    </div>
  );
};

export default Home;

