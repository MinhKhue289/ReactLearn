import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We ensure better education for a better world</h1>
        <p>Our cutting-edge curiculum is designed to empower
          with knowledge, skills, and confidence needed to excel in the
          dynamic filed of technology.
        </p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero