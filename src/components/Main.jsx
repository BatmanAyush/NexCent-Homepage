import React from 'react'
import './Main.css'
import img1 from './img2.png';
import img2 from './img3.png';
import img3 from './img4.png';
import img4 from './img5.png';


const Main = () => {
  return (
    <div className='main-content'>
    <p className='title-1'>Manage your entire community</p>
    <p className='title-2'>in a single system</p>
    <p className='title-3'>who is Nextcent suitable for?</p>

    <div className='main-features'>
        <div className='feature'>
            <img src={img1}/>
            <p className='heading'>Membership</p>
            <p className='heading'>Organisations</p>
            <span className='footer'>
                Our Membership manangement software provides full automation of membership renewals
                and payments
            </span>
        </div>
        <div className='feature'>
            <img src={img2}/>
            <p className='heading'>National</p>
            <p className='heading'>Associations</p>
            <span className='footer'>
                Our Membership manangement software provides full automation of membership renewals
                and payments
            </span>
        </div>
        <div className='feature'>
            <img src={img3}/>
            <p className='heading'>Membership</p>
            <p className='heading'>Organisations</p>
            <span className='footer'>
                Our Membership manangement software provides full automation of membership renewals
                and payments
            </span>
        </div>
    </div>
<div className='para-2'>
<img src={img4} />
<div style={{display:'flex',flexDirection:'column'}}>
    
<p>The unseen of spending three</p>
<p>years at Pixelgrade</p>

<span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti ratione ex libero expedita natus labore illo deserunt, aperiam voluptatibus reiciendis est asperiores tempore non iusto, voluptas voluptatum iure! Fugiat, veritatis.</span>
<button>Learn More</button>
</div>

</div>



    </div>
  )
}

export default Main
