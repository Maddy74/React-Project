import React from 'react';
import './Letter.css';

const Letter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type='email' placeholder='Your Email id' id="name" name="name"/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Letter
