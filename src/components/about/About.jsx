import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-desc'>
        <h3>Let me tell you something about me</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, quos! Veniam ipsum enim repellat quisquam vel sequi, ex porro quibusdam.</p>
      </div>
      <div className='about-img'>
        <img src='https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='about'/>
      </div>
    </div>
  )
}

export default About