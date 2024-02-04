import React from 'react';
import './Footer.css'
import Logo from '../Assets/logo.png';
import insta from '../Assets/instagram_icon.png';
import whatsapp from '../Assets/whatsapp_icon.png';
import pin from '../Assets/pintester_icon.png';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
      <img src={Logo} alt='logo' />
      <p>SHOPPER</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className='social-logo'>
      <div className='social-logo-container'>
        <img src={insta} alt='insta logo' />
        </div>
        <div className='social-logo-container'>
        <img src={pin} alt='pintest logo' />
        </div>
        <div className='social-logo-container'>
        <img src={whatsapp} alt='whatsapp logo' />
        </div>
      </div>
      <div className='footer-copyright'>
        <hr />
        <p>Copyright @ 2024 - All</p>
      </div>
    </div>
  )
}

export default Footer
