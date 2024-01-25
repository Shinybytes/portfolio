import React, { useEffect } from 'react';
import './colorswitcher.scss';

const Colorswitcher = () => {
  function toggleColors() {
    const root = document.documentElement;
    const currentPrimaryColor = getComputedStyle(root).getPropertyValue('--primary-color').trim();
    const currentSecondaryColor = getComputedStyle(root).getPropertyValue('--secondary-color').trim();
    
    const newPrimaryColor = currentSecondaryColor;
    const newSecondaryColor = currentPrimaryColor;
    
    root.style.setProperty('--primary-color', newPrimaryColor);
    root.style.setProperty('--secondary-color', newSecondaryColor);
  }

  useEffect(() => {
  }, []);

  return (
    <div>
      <div className='bwSwitch'>
        <button onClick={toggleColors}>
        </button>
      </div>
    </div>
  );
}

export default Colorswitcher;
