
import './index.scss';
import Hero from '../Hero';


const Home = ({ scrollToSection, homeRef, aboutRef, kontaktRef }) => {
  return (
    <div className='App'>

      <Hero scrollToSection={scrollToSection} aboutRef={aboutRef} />


    </div >
  );
}

export default Home;