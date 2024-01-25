import React, { useEffect } from 'react';
import './colorswitcher.scss';
import gsap from "gsap";

const Colorswitcher = () => {
  const toggleColors = () => {
    const root = document.documentElement;
    const currentPrimaryColor = getComputedStyle(root).getPropertyValue('--primary-color').trim();
    const currentSecondaryColor = getComputedStyle(root).getPropertyValue('--secondary-color').trim();

    const newPrimaryColor = currentSecondaryColor;
    const newSecondaryColor = currentPrimaryColor;

    gsap.to(root, {
      '--primary-color': newPrimaryColor,
      '--secondary-color': newSecondaryColor,
      duration: 1, // Animationsdauer von 1 Sekunde
      ease: 'power2.inOut',
    });
  };


  const Click = () => {
    toggleColors(); // Umschalte die Farben

    gsap.to('.bwSwitch', {
      rotate: 180, // Ändere dies je nach gewünschter Bewegung
      duration: 0.5,
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.to('.bwSwitch', {
            rotate: 0, // Ändere dies je nach gewünschter Bewegung
            duration: 0.5,
            ease: 'power2.inOut',
        });
    }
    });
    
  };

  useEffect(() => {
    // Füge hier ggf. weitere Logik oder Effekte hinzu, die beim Mounten der Komponente ausgeführt werden sollen
  }, []);

  return (
    <div>
      <div className='bwSwitch'>
        <button onClick={Click}>
        </button>
      </div>
    </div>
  );
}

export default Colorswitcher;
