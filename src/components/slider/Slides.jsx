import React from 'react'
import './Slider.css'

const slidesInfo = [
  {
    src: 'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Project 1',
    desc: 'Project 1'
  },
  {
    src: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Project 2',
    desc: 'Project 2'
  },
  {
    src: 'https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Project 3',
    desc: 'Project 3'
  },
];

const slides = slidesInfo.map(slide => (
  <div className='slide-container'>
    <img src={slide.src} alt={slide.alt}/>
    <div className='slide-desc'>
      <span>{slide.desc}</span>
    </div>
  </div>
))

export default slides;