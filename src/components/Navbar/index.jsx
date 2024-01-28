import { useEffect, useRef, useState } from 'react'
import './Navbar.scss'
import gsap from "gsap";
import { FaBars, FaTimes } from 'react-icons/fa';
import MobileNav from '../MobileNav';
import Colorswitcher from '../Colorswitcher';


const Navbar = ({ scrollToSection, homeRef, aboutRef, kontaktRef }) => {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu state
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  //Navfunktion
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };

  useEffect(() => {



    function enterAnimation(link, e, index) {
      link.tl.tweenFromTo(0, 'midway');
    }

    // Mouseleave function
    function leaveAnimation(link, e) {
      link.tl.play();
    }

    // Get all links
    let workLinks = document.querySelectorAll('.js-work-link');

    workLinks.forEach((link, index, value) => {
      let underline = link.querySelector('.underline');
      link.tl = gsap.timeline({ paused: true });

      link.tl.fromTo(
        underline,
        {
          width: '0%',
          left: '0%',
        },
        {
          width: '100%',
          duration: 1,
        }
      );

      link.tl.add('midway');

      link.tl.fromTo(
        underline,
        {
          width: '100%',
          left: '0%',
        },
        {
          width: '0%',
          left: '100%',
          duration: 1,
          immediateRender: false,
        }
      );

      // Mouseenter
      const handleMouseEnter = (e) => enterAnimation(link, e, index);
      link.addEventListener('mouseenter', handleMouseEnter);

      // Mouseleave
      const handleMouseLeave = (e) => leaveAnimation(link, e);
      link.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup
      return () => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      };
    });



    //Buchstaben animation
    gsap.registerPlugin('rotation');

    // GSAP Animation
    const rotateLetters = (target, rotation) => {
      gsap.to(target, {
        rotation,
        duration: 1,
        ease: 'power2.inOut',
      });
    };

    // Event Listeners
    const letters = document.querySelectorAll('.Buchstabe');

    letters.forEach((letter) => {
      letter.addEventListener('mouseenter', () => {
        rotateLetters(letter, '+=360');
      });

      letter.addEventListener('mouseleave', () => {
        rotateLetters(letter, 0);
      });
    });


    // Cleanup
    return () => {
      letters.forEach((letter) => {
        letter.removeEventListener('mouseenter', () => { });
        letter.removeEventListener('mouseleave', () => { });
      });
    };



    

  }, []);

  return (
    <>
      <nav ref={navRef}>
        <div className="navbar" >
          <div className="nav-items js-work-link">
            <a href='#' onClick={() => scrollToSection(homeRef)}><span className='js-an-word'>HOME</span><span className="underline"></span></a>
          </div>
          <div className="nav-items js-work-link">
            <a href='#' onClick={() => scrollToSection(aboutRef)}><span className='js-an-word'>ABOUT</span><span className="underline"></span></a>
          </div>
          <div className="nav-items js-work-link">
            <a href='#' onClick={() => scrollToSection(kontaktRef)}><span className='js-an-word'>KONTAKT</span><span className="underline"></span></a>
          </div>
          <button className="toggle-button" onClick={toggleMobileMenu} >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className="name">
          <h1 className='Buchstabe'>S</h1>
          <h1 className='Buchstabe'>I</h1>
          <h1 className='Buchstabe'>M</h1>
          <h1 className='Buchstabe'>O</h1>
          <h1 className='Buchstabe'>N</h1>
          <h1> </h1>
          <h1 className='Buchstabe'>J</h1>
          <h1 className='Buchstabe'>A</h1>
          <h1 className='Buchstabe'>N</h1>
          <h1 className='Buchstabe'>S</h1>
          <h1 className='Buchstabe'>E</h1>
          <h1 className='Buchstabe'>N</h1>
        </div>

        {isMobileMenuOpen && <MobileNav isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} scrollToSection={scrollToSection} homeRef={homeRef} aboutRef={aboutRef} kontaktRef={kontaktRef} />}    </nav>
      <Colorswitcher/>
    </>
  )
}

export default Navbar