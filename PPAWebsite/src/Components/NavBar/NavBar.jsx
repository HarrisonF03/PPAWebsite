import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { Link as ScrollLink } from 'react-scroll'; 
import './NavBar.css';
import logo from '../../assets/logo.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='Container'>
      <img src={logo} alt="Logo" className='logo' />
      <ul className='nav-links'>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/about'>About</Link> 
        </li>
        <li>
          <Link>Appointments</Link>
        </li>
      </ul>
      <button className='toggle-button' onClick={toggleSideNav} aria-label="Toggle navigation">
        ☰
      </button>
      <div className={`side-nav ${isOpen ? 'open' : ''}`}>
        <button className='close-button' onClick={toggleSideNav} aria-label="Close navigation">×</button>
        <ul>
          <li>
            <ScrollLink to='hero' smooth={true} offset={0} duration={500} onClick={toggleSideNav}>Home</ScrollLink>
          </li>
          <li>
            <ScrollLink to='contact' smooth={true} offset={0} duration={500} onClick={toggleSideNav}>Contact</ScrollLink>
          </li>
          <li>
            <Link to='/about' onClick={toggleSideNav}>About</Link> 
          </li>
          <li onClick={toggleSideNav}>Appointments</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
