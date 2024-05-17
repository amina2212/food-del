import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">

       <div className="footer-content-left">
        <img src={assets.logo} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur </p>
        </div> 

        <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>

       <div className="footer-content-centre">
        <h2>COMPANY</h2>
        <ul>
         <li>HOME</li>
         <li>ABOUT</li>
         <li>DELIVERY</li>
         <li>PRIVACY POLICY</li>   
        </ul>
       </div>

       <div className="footer-content-right">
         <h2>Get in Touch</h2>
         <ul>
           <li>+1-22-33-4444</li>
           <li>contact@tomato.com</li>  
         </ul>

       </div>
        
        </div> 
        <hr />
        <p className="footer-copyright">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat est labore, ratione hic quod vero. Dolorem harum delectus commodi nisi architecto ipsum natus aspernatur doloremque similique culpa. Numquam, qui aliquid.</p>
    </div>
  )
}

export default Footer
