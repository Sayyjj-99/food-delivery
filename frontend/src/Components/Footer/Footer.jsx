import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, vel dolores veritatis beatae harum neque culpa voluptas sint quo libero asperiores quasi molestias doloremque, aspernatur incidunt. Laboriosam repellat praesentium facilis voluptate quo quaerat illo reiciendis.</p>
                 <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                 </div>
            </div>
            <div className="footer-content-center">
                  <h2 className='text-2xl font-semibold'>COMPANY</h2>
                  <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                  </ul>
            </div>
            <div className="footer-content-right">
                <h2 className='text-2xl font-semibold'>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@tomato.com</li>
                </ul>

            </div>
            
        </div>
        <hr />
        <p className="footer-copywright">Copyright 2026 @ Tomato.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
