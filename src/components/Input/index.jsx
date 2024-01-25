// Input.jsx
import React from 'react';
import './Input.scss';
import { useState } from 'react';
import { gsap } from 'gsap';

const Input = ({ handleZuruckClick }) => {
  const [setShowButtons] = useState(true);

  const handleButtonClick = () => {
    gsap.to('.buttoncontainer', { opacity: 0, duration: 0.5, onComplete: () => setShowButtons(false) });
    gsap.from('.input-container', { opacity: 0, duration: 0.5, delay: 0.5 });
  };

  const handleAlert = () => {
    alert("Diese Funktion ist noch nicht implementiert. Bitte kontaktieren Sie mich per LinkedIn.");
  };

  return (
    <div>
      <form className='kontaktformular' action="">
        <div className='textinput'>
          <input type="text" placeholder='Name' name="" id="" required/>
          <input className='two' type="text" placeholder='Mail/Telefonnummer' name="" id="" required/>
        </div>
        <div className='buttons'>
          <button className='formularbutton' onClick={handleZuruckClick}><p>Zurück</p></button>
          <button className='formularbutton' onClick={handleAlert}><p>Senden</p></button>
        </div>
      </form>
    </div>
  );
};

export default Input;
