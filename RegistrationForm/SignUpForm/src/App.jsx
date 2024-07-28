// import './App.css';
// import Signup from './Components/TestSignIp';
// // import DemoForm from './Components/DemoForm';

// function App() {

//   return (

//     <div className='FrontPage'>

//   {/* <Component1/> */}

// <div className='backgroundcolor'>
//        <header className="NavBar">

//          <Signup/>
//       </header>

// <h2 className='Heading1' style={{marginTop:"30vh" , textAlign:"center"}}>Interview Questions Search Engine</h2>
// <h3 className='Heading2' style={{textAlign:"center"}}>Join us for preparation of Interview</h3>
// </div>

//       <footer className="Footer">
//         <div className="SetFooter">
//           <div className='About'>
//             <h3>About Us</h3>
//             <ul className="AboutUs">
//               <li>Name: Saifullah</li>
//               <li>Full Stack Developer</li>

//             </ul>
//           </div>
//           <div className='HelpUs'>
//             <h3>Help</h3>
//             <ul className="Help">
//               <li>
//                 <a href="mailto:saifullahkhanjadoon1998@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
//   <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
// </svg>Contact Us</a>
//               </li>
//               <li>
//                 <a href='+923078169109'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
//   <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
// </svg>Whatsapp</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <p>© 2024 Search Engine from Meta</p>
//       </footer>

//       </div>

//   )
// }
// export default App;

// src/App.js

// import React from 'react';
import {  Route, Routes } from "react-router-dom";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import NavBar from "./Components/Nav.component";
import Home from "./Components/Home.component";
import Signup from "./Components/Signup.component";
import Login from "./Components/Login.component";
import Dashboard from "./Components/Dashboard.component";
import Metrics from "./Components/Metrics";

import "./App.css";

const App = () => {
  return (
    <>
      <div className="App">
        <NavBar />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/metrics" element={<Metrics/>}/>
        </Routes>

      
       
      </div>
    </>
  );
};

export default App;
