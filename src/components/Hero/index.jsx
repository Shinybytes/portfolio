import './hero.scss';
import Threejs from '../Threejs';
import React from 'react';
import gsap from "gsap";



const Hero = ({ scrollToSection, aboutRef }) => {


    const animateButtonOnHover = () => {
        // Füge die Animation zur Timeline hinzu
        gsap.to('.button', {
            rotate: 359, // Ändere dies je nach gewünschter Bewegung
            duration: 0.5,
            ease: 'power2.inOut',
            onComplete: () => {
                gsap.to('.button', {
                    rotate: 0, // Ändere dies je nach gewünschter Bewegung
                    duration: 0.5,
                    ease: 'power2.inOut',
                });
            }
        });
        // Füge die Animation zur Timeline hinzu
        gsap.to('.hi', {
            rotate: -5, // Ändere dies je nach gewünschter Bewegung
            y: -30,
            duration: 0.5,
            ease: 'power2.inOut',
            onComplete: () => {
                gsap.to('.hi', {
                    rotate: 0, // Ändere dies je nach gewünschter Bewegung
                    y: 0,
                    duration: 0.5,
                    ease: 'power2.inOut',
                });
            }
        });

        gsap.to('.hisub', {
            rotate: -5, // Ändere dies je nach gewünschter Bewegung
            duration: 0.5,
            x: -30,
            ease: 'power2.inOut',
            onComplete: () => {
                gsap.to('.hisub', {
                    rotate: 0, // Ändere dies je nach gewünschter Bewegung
                    x: 0,
                    duration: 0.5,
                    ease: 'power2.inOut',
                });
            }
        });

    }




    return (
        <div className="herosection">
            <div className="hero-background">
                <div className='namebox'>

                    <div>
                        <h3 className="hi">Simon Jansen</h3>
                        <p className='hisub'>Medieninformatikstudent an der TH Brandenburg</p>
                    </div>
                </div>
                <div className='buttonbox'>

                    <button class="button" onMouseEnter={animateButtonOnHover} onClick={() => scrollToSection(aboutRef)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
                    </svg></button>


                </div>
            </div>
            <div className="hero">
                <Threejs />
            </div>
        </div >

    );
}

export default Hero;