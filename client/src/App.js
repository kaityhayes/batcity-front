import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Upcoming } from './pages/Upcoming';

import { CalendarView } from './pages/CalendarView';
import { Newsletter } from './pages/Newsletter';
import { About } from './pages/About';
import { Booking } from './pages/Booking';
import './App.css';



function App() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    
    <div style={{ paddingBottom: '100px', backgroundColor: '#EAE8E6' }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Bat City Productions<img src="https://i.imgur.com/xWffzNa.png"></img></Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={!collapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Upcoming">Upcoming Shows</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/CalendarView">Calendar</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Newsletter">Newsletter</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Booking">Booking</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Upcoming" element={<Upcoming />} />
        <Route path="/CalendarView" element={<CalendarView />} />
        <Route path="/Newsletter" element={<Newsletter />} />
        <Route path="/About" element={<About />} />
        <Route path="/Booking" element={<Booking />} />
      </Routes>
     
    
      <footer style={{ marginTop: 'auto' }}>
  <div style={{ paddingBottom: '0px' }}>
    <div style={{ marginTop: '0px' }}>
      <img src="https://i.imgur.com/KdfoU6W.png" alt="Footer Image" className="img-fluid mx-auto d-block" />
    </div>
  </div>
  
  
  <div style={{ backgroundColor: '#EAE8E6', paddingTop: '0px', paddingBottom: '20px' }}>
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <a href="https://github.com/kaityhayes">GitHub<i className="fab fa-github fa-2x mx-3"></i></a>
          <a href="https://www.linkedin.com/in/kaityhayes">LinkedIn<i className="fab fa-linkedin fa-2x mx-3"></i></a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Facebook<i className="fab fa-facebook-square fa-2x mx-3"></i></a>
          <a href="https://www.instagram.com/petty_lame">Instagram<i className="fab fa-instagram fa-2x mx-3"></i></a>
        </div>
      </div>
    </div>
  </div>

  <div style={{paddingBottom: '0px' }}>
    <div style={{ marginTop: '0px' }}>
      <p className='text-center'>Kaity Hayes - Bat City Productions - Austin, Texas - © 2023</p>
    </div>
  </div>
</footer>




    </div>
  );
}

export default App
