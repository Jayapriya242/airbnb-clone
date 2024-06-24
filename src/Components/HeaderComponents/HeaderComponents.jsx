import React from 'react';
import logo from '../../assets/Images/logo.png'
import './HeaderComponents.css';
import { FaGlobe } from 'react-icons/fa';

function App() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Airbnb Logo" />
      </div>
      <nav className="nav-buttons">
        <button>Stays</button>
        <button>Experiences</button>
      </nav>
      <button className='nav-buttons2'>Airbnb Your Home</button>
      <div className="actions">
        <button><FaGlobe  className="globe-button"></FaGlobe></button>
        <div className="profile-box">
          <div className="menu-icon">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="profile-button">👤</div>
        </div>
      </div>
    </header>
  );
}

export default App;

