import React from 'react'
import './about.scss'
import portraitImage from '../../assets/images/portait.png';
import Skills from '../Skills';
import Time from '../Time';
import HelloMarquee from '../HelloMarquee';
import gsap from "gsap";
import Abouttext from '../Abouttext';



const About = () => {

  const animateButtonOnHover = () => {
    gsap.to('.Hallo', {

      opacity: 0,
      duration: 1,
      ease: 'power2.inOut',

    });
    gsap.to('.Hallop', {

      y: -60,
      duration: 1,
      ease: 'power2.inOut',

    });
  }

  const animateButtonOnLeave = () => {
  gsap.to('.Hallo', {
    opacity: 100,
    duration: 1,
    ease: 'power2.inOut',
  });
  gsap.to('.Hallop', {
    
    y: 0,
    duration: 1,
    ease: 'power2.inOut',
  });
}

  return (
    <>
      <HelloMarquee />
      <div className='Aboutpage'>
        <div className='Bildcontainer' onMouseEnter={animateButtonOnHover} onMouseLeave={animateButtonOnLeave}>
          <div className='Bild'>
            <img src={portraitImage} alt="Portrait" loading="eager" />
          </div>

          <div className='text'>

            <h1 className='Hallo' >
              Hallo!

            </h1>
            <p className='Hallop'>
              Mein Name ist Simon Jansen.
              <br></br>
              <br></br>
              Ich studiere Medieninformatik an der Technischen Hochschule Brandenburg.
            </p>
          </div>
        </div>
        <Time />
        <Skills />
        <Abouttext />

       



      </div>

    </>
  )
}

export default About