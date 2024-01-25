import React from 'react'
import './buttons.scss'

const Buttons = ({ onButtonClick }) => {
  return (

    <div className='buttoncontainer'>
      <div><button onClick={() => onButtonClick('email')}>

        <p>Email</p>
      </button></div>
      <div><a href="https://www.linkedin.com/in/simon-jansen-5b3b632aa/" target="_blank" rel="noopener noreferrer"><button >

        <p>LinkedIn</p></button></a>
      </div>
      <div><button onClick={() => onButtonClick('email')}>

        <p>Telefon</p>
      </button></div>
    </div>

  )
}

export default Buttons;