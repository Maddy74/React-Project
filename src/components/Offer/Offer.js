import React from 'react'
import './Offer.css'
import image from '../Assets/exclusive_image.png'
const Offer = () => {
  return (
    <div className='offer'>
      <div className='left-offer'>
      <h1>EXCLUSIVE</h1>
      <h1>Offers For You</h1>
      <p>ONLY ON BEST SELLERS PRODUCTS</p>
      <button>Check Now</button>
      </div>
      <div className='right-offer'>
      <img src={image} alt='Exclusive Logo' />
      </div>
    </div>
  )
}

export default Offer;
