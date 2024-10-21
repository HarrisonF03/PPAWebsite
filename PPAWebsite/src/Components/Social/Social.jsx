import React from 'react'
import './Social.css'
import fb from '../../assets/facebook-icon.png'
import ig from '../../assets/instagram-logo.png'

const Social = () => {
  return (
    <div className='social'>
      <div className='social-buttons'>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='social-button'>
          <img src={ig} alt="Instagram" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='social-button'>
          <img src={fb} alt="Facebook" />
        </a>
      </div>
      <div className='contact-info'>
        <p><strong>Hours of Operation:</strong> Mon-Fri: 9am - 6pm</p>
        <p><strong>Email:</strong> info@example.com</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
      </div>
    </div>
  );
};

export default Social
