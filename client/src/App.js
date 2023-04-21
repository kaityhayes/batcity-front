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
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Bat City Productions</Link>
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
    </>
  );
}

export default App;
