import React from 'react';
import './CSS/Login.css';
const Login = () => {
  return (
    <div className='login'>
      <div className='loginsignup-container'>
      <h1>Sign Up</h1>
      <div className='fields'>
      <input type='text' placeholder='Your name' />
      <input type='email' placeholder='Email address' />
      <input type='password' placeholder='Password' />
      </div>
      <button>Sign Up</button>
      <p className='login-signup'>
        Already have an Account?<span> Login here</span>
      </p>
      <div className='login-agree'>
      <input type='checkbox' />
      <p>By continuing, i agree to the terms of use & privacy policy</p>
      </div>
      </div>
    </div>
  )
}

export default Login
