import './hero.scss';
import Threejs from '../Threejs';
import React, { useState, useRef, useEffect } from 'react';


const Hero = () => {

    const componentRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
  
    useEffect(() => {
      // Get the height of the component
      const componentHeight = componentRef.current.clientHeight;
      setScrollPosition(componentHeight);
    }, []);
  
    const scrollDown = () => {
      const componentHeight = componentRef.current.clientHeight;
      const newScrollPosition = scrollPosition + componentHeight;
  
      window.scrollTo({
        top: newScrollPosition,
        behavior: 'smooth',
      });
  
      setScrollPosition(newScrollPosition);
    };

    return (
        <div className="herosection" ref={componentRef}>
            <div className="hero-background">
                <div className='namebox'>
                    
                    <div>
                    <h3 className="hi">Simon Jansen</h3>
                    <p className='hisub'>Medieninformatikstudent an der TH Brandenburg</p>
                    </div>
                </div>
                <div className='buttonbox'>
                    <button class="button" onClick={scrollDown}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
                    </svg></button>
                    
                </div>
            </div>
            <div className="hero">
                <Threejs />
            </div>
        </div>

    );
}

export default Hero;