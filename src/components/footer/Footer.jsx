import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-info'>
        <h1>Your name</h1>
        <p>Based in your city</p>
      </div>
      <div className='footer-contact'>
        <h3>Contact me</h3>
        <p>And let's get down to work</p>
      </div>
      <div className='footer-sns'>
        <div className='design-by'>
          Design by your name
        </div>
        <div className='sns-links'>
          <a href='https://www.linkedin.com/in/nicolas-escudero/' target='_blank' rel='noreferrer'>
            <i className='fab fa-linkedin linkedin'></i>
          </a>
          <a href='https://twitter.com/' target='_blank' rel='noreferrer'>
            <i className='fab fa-twitter twitter'></i>
          </a>
          <a href='https://facebook.com/' target='_blank' rel='noreferrer'>
            <i className='fab fa-facebook facebook'></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer