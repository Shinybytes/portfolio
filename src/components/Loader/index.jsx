import React, { useEffect, useState, useRef } from 'react';
import './loader.scss';
import gsap from 'gsap';

const Loader = () => {
    const [ladezahlValue, setLadezahlValue] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setLadezahlValue(prevValue => {
                const newValue = prevValue + 1;
                return newValue > 100 ? 100 : newValue;
            });
        }, 16); // Anpassen der Zeitverzögerung, um die Geschwindigkeit zu steuern

        // Stoppe das Intervall nach etwa 5 Sekunden (5000 Millisekunden)
        setTimeout(() => {
            clearInterval(intervalId);
        }, 5000);

        gsap.fromTo(".Ladezahl", {x: -1100, fill: 'blue', }, { x: 0, fill: 'green' });
        gsap.to(".Ladezahl", 1.5, { delay: 3.5, opacity: 0, height: 0, stagger: { amount: 0.4 }, ease: "power4.inOut"  });
        gsap.to(".overlay", 1.5, { delay: 3.5, opacity: 0, height: 0, stagger: { amount: 0.4 }, ease: "power4.inOut" });
        gsap.to(".ladebalken1", 1.5, { delay: 3.5, opacity: 0, height: 0, stagger: { amount: 0.4 }, ease: "power4.inOut" });
        gsap.to(".ladebalken1", 1, { delay: 2.8, opacity: 0, height: 0, stagger: { amount: 0.4 }, ease: "power4.inOut" });
        
     
     
        // Aufräumen, wenn die Komponente entladen wird
        return () => clearInterval(intervalId);




    }, []);

    return (
        <div className='preloader'>
            <div className="ladebalken1" style={{ width: `${ladezahlValue}vw` }}></div>
            <h1 className="Ladezahl">{`${ladezahlValue}`}</h1>
            <div className="overlay">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div key={index} className="box"></div>
                ))}
            </div>
        </div>
    );
};

export default Loader;
