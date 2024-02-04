import React from 'react'
import './Hero.css'
import hero from '../Assets/hero_image.png'
import hand from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
export default function Hero() {
  return (
    <div className='hero'>
      <div className='left'>
      <h2>NEW ARRIVALS ONLY</h2>
      <div className='hand'>
      <p>new<img src={hand} alt='hand'/></p>
      </div>
      <p>collections</p>
      <p>for everyone</p>
      <div className='Btn'>
      <div>Latest Collection</div>
      <img src={arrow} alt='arrow'/>
      </div>
      </div>
      <div className='right'>
      <img src={hero} alt='hero_img'/>
      </div>
    </div>
  )
}
