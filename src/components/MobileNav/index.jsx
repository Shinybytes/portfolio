import React from 'react';
import './mobilenav.scss';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
       <div className="nav-items"><Link style={{ textDecoration: 'none' }} onClick={toggleMenu} to="/"><h2>HOME</h2></Link></div>
        <div className="nav-items"><Link style={{ textDecoration: 'none' }} onClick={toggleMenu} to="../About"><h2>ABOUT</h2></Link></div>
        <div className="nav-items"><Link style={{ textDecoration: 'none' }} onClick={toggleMenu} to="../Kontakt"><h2>KONTAKT</h2></Link></div>
      <button onClick={toggleMenu}><FaTimes /></button>
    </div>
  );
};

export default MobileNav;
