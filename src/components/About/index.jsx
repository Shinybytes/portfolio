import React from 'react'
import { Link } from 'react-router-dom';
import './about.scss'
import portraitImage from '../../assets/images/portait.png';
import Skills from '../Skills';
import Time from '../Time';


const About = () => {
  return (
    <div className='Aboutpage'>
      <div className='Bildcontainer'>
        <div className='Bild'>
          <img src={portraitImage} alt="Portrait" loading="eager"/>
        </div>

        <div className='text'>

          <h1>
            Hallo!
          </h1>
          <p>
            Mein Name ist Simon Jansen.
          </p>
          <p>

            Ich studiere Medieninformatik an der Technischen Hochschule Brandenburg.
          </p>
        </div>
      </div>
      <Time/>
      <Skills/>

      <div className='text2'>
        <p>
          Meine Leidenschaft gilt insbesondere der Web- und App-Entwicklung sowie dem Design.
          </p>
        <p>
          Ich liebe es, innovative Lösungen zu gestalten und meine kreativen Ideen in die digitale Welt umzusetzen.
          </p>
        <p>
          Während meines Studiums habe ich einige Kenntnisse in den Programmiersprachen, Java, JavaScript und Python gesammelt.
        </p>
        
      <button className='Kontaktbtn'><Link to="../Kontakt"><h3>Kontakt</h3></Link></button>
        
      </div>
      

      
    </div>

  )
}

export default About