import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
const Login = ({setShowLogin}) => {
    const [currstate,setCurrstate]=useState("Login")
  return (
    <div className='login'>
      <form className='login-container'>
        <div className='login-title'>
            <h2>{currstate}</h2>
            <img  onClick={()=>setShowLogin(false)}src={assets.cross_icon}></img>
        </div>
        <div className='login-input'>
            {currstate==="Login"?<></>:<input type='text'placeholder='your name' required></input>}
            
            <input type='email'placeholder='your email' required></input>
            <input type='password'placeholder='Password' required></input>

        </div>
        <button>{currstate==="Sign up"?"Create account":"Login"}</button>
        <div className='login-condition'>
            <input type='checkbox' required></input>
            <p>By continuing,I agree to the terms of use & privacy policy</p>
            {currstate==="Login"
            ?<p>Create a new  account?<span onClick={()=>setCurrstate("Sign up")}>Click here</span></p>
        :<p>Already have an account?<span onClick={()=>setCurrstate("Login")}>Click here</span></p>
        }

        </div>
      </form>
    </div>
  )
}

export default Login
