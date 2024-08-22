import React from 'react'
import './Widgets.css'
import img1 from './img6.png'
import img2 from './img7.png'
import img3 from './img8.png'

const Widgets = () => {
  return (
    <div className='widgets'>
        <div className='text-content'>
        <p>Caring is the new Marketing</p>
     <span>The Nextcent  blog is the best place to read about the latest memberships insights trends and More
See who's Joining the Community,read about how our community are increasing their membership income and lots more 
     </span>
        </div>
        <div className='marketing-content'>

        <div className='widget-display'>
        <img src={img1} className='profile-picture' />
        <div className='card-content'>
            <span>Created Streamlined safeguarding Processes with OneRen</span>
           <p className='read-more'>Readmore</p>
        </div>
        </div>
        <div className='widget-display'>
        <img src={img2} className='profile-picture' />
        <div className='card-content'>
            <span>What are your Safeguard Responsibilites and how can you manage them?</span>
           <p className='read-more'>Readmore</p>
        </div>
        </div>
        <div className='widget-display'>
        <img src={img3} className='profile-picture' />
        <div className='card-content'>
            <span>Revamping the membership model with triathlon Australia</span>
           <p className='read-more'>Readmore</p>
        </div>
        </div>
        

        
        


        </div>
        
     
    </div>
  )
}

export default Widgets
