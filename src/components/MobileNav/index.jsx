import React, { useEffect, useRef } from 'react';
import './mobilenav.scss';
import { FaTimes } from 'react-icons/fa';
import gsap from 'gsap';

const MobileNav = ({ isOpen, toggleMenu, scrollToSection, homeRef, aboutRef, kontaktRef }) => {
  const mobileNavRef = useRef(null);

  useEffect(() => {
    const mobileNav = mobileNavRef.current;

    if (isOpen) {
      gsap.fromTo(
        mobileNav,
        { x: '100%' },
        {
          x: '0%',
          duration: 0.5,
          ease: 'power2.inOut',
        }
      );
    }

  }, [isOpen]);

  const handleClose = () => {
    gsap.to(mobileNavRef.current, {
      x: '100%',
      duration: 0.5,
      ease: 'power2.inOut',
      onComplete: toggleMenu, // This callback will be executed after the animation completes
    });
  };

  return (
    <div className={`mobile-nav ${isOpen ? 'open' : ''}`} ref={mobileNavRef}>
      <div className="nav-items"><a href="#" onClick={() => {handleClose(); scrollToSection(homeRef);}}><h2>HOME</h2></a></div>
      <div className="nav-items"><a href="#" onClick={() => {handleClose(); scrollToSection(aboutRef);}}><h2>ABOUT</h2></a></div>
      <div className="nav-items"><a href="#" onClick={() => {handleClose(); scrollToSection(kontaktRef);}}><h2>KONTAKT</h2></a></div>
      <button onClick={handleClose}><FaTimes /></button>
    </div>
  );
};

export default MobileNav;
