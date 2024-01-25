import React from 'react';
import './mobilenav.scss';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MobileNav = ({ isOpen, toggleMenu, scrollToSection, homeRef, aboutRef, kontaktRef }) => {
  return (
    <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
      <div className="nav-items"><a href="#" onClick={() => {toggleMenu(); scrollToSection(homeRef);}}><h2>HOME</h2></a></div>
      <div className="nav-items"><a href="#" onClick={() => {toggleMenu(); scrollToSection(aboutRef);}}><h2>ABOUT</h2></a></div>
      <div className="nav-items"><a href="#" onClick={() => {toggleMenu(); scrollToSection(kontaktRef);}}><h2>KONTAKT</h2></a></div>
      <button onClick={toggleMenu}><FaTimes /></button>
    </div>
  );
};

export default MobileNav;
