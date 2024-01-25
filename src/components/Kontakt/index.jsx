// Kontakt.jsx
import React, { useState } from 'react';
import './kontakt.scss';
import { gsap } from 'gsap';
import Input from '../Input';
import Buttons from '../Buttons';

const handleZuruckClick = setShowButtons => {
  setShowButtons(true);
};

const Kontakt = () => {
  const [showButtons, setShowButtons] = useState(true);

  const handleButtonClick = buttonType => {
    gsap.to('.buttoncontainer', { opacity: 0, duration: 0.5, onComplete: () => setShowButtons(false) });
    gsap.from('.input-container', { opacity: 0, duration: 0.5, delay: 0.5 });
  };

  return (
    <div className='Kontakt'>

      <div className="kontakt-container">
        <h1>KONTAKT</h1>
        <p>Wie möchtest du mich Kontaktieren?</p>

        {showButtons ? (
          <Buttons onButtonClick={handleButtonClick} />
        ) : (
          <div className='input-container'>
            <Input handleZuruckClick={() => handleZuruckClick(setShowButtons)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Kontakt;
