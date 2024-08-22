import React from 'react'
import './Hero.css'
import img from './img1.png'
const Hero = () => {
  return (
    <div className='hero-component'>
        <div className='title-content'>
        <p className='text-1'>Lessons and insights</p>
   <p className='text-2'>from 8 Years</p>
   <p className='text-3'>where to grow your business as photographer; site or social media </p>
   <button>Register</button>
        </div>
        <div>
            <img src={img} className='profile-picture'/>
        </div>
  
    </div>
  )
}

export default Hero
