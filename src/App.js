import React, { useRef } from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Loader from './components/Loader';
import About from './components/About';
import Kontakt from './components/Kontakt';

function App() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const kontaktRef = useRef();

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };


  return (
    <div>
      <BrowserRouter>
        <Loader />
        <Navbar scrollToSection={scrollToSection} homeRef={homeRef} aboutRef={aboutRef} kontaktRef={kontaktRef} />
        <section ref={homeRef} id="home">
          <Home scrollToSection={scrollToSection} aboutRef={aboutRef}/>
        </section>
        <section ref={aboutRef} id="about">
          <About />
        </section>
        <section ref={kontaktRef} id="kontakt">
          <Kontakt />
        </section>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
