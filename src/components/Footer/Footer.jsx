import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo}></img>
                <p></p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt=''></img>
                    <img src={assets.twitter_icon} alt=''></img>
                    <img src={assets.linkedin_icon} alt=''></img>


                </div>

            </div>
            <div className='footer-content-center'>
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>privacy Policy</li>

                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 9123456780</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        
      </div>
    </div>
  )
}

export default Footer
