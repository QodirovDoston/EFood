import React from 'react'
import './Style.css'
const icon = require("../../img/EFood.png")
 
const Footer = (props) => {
  return(
    <>
  <div className="container">
    <div className="row justify-content-around mt-5">
        <div className="col-2">
            <img src={icon} alt="" />
          <ul className='list_ati'>
          <i class="fa-light fa-location-dot"></i>
            <li className='serbiya'>Dhaka, Bangladesh</li>
            <li className='serbiya'>0943833399</li>
            <li className='serbiya'>support@efood.com</li>
          </ul>
          <img src="" alt="" />
        </div>
        <div className="col-2">
            {/* <img src={icon} alt="" /> */}
          <ul className='list_ati'>
            <li className='serbiya'>Service</li>
            <li className='serbiya'>How it works</li>
            <li className='serbiya'>Home delivery</li>
            <li className='serbiya'>Prducts</li>
            <li className='serbiya'>Menu</li>
          </ul>
        </div>
        <div className="col-2">
          <ul className='list_ati'>
            <li className='serbiya'>Company</li>
            <li className='serbiya'>About Us</li>
            <li className='serbiya'>News</li>
            <li className='serbiya'>Our trusted partner</li>
            <li className='serbiya'>New users FAQ</li>
          </ul>
        </div>
        <div className="col-2">
          <ul className='list_ati'>
            <li className='serbiya'> Supports</li>
            <li className='serbiya'>Help center</li>
            <li className='serbiya'>Feedbcak</li>
            <li className='serbiya'>Contact us</li>
            <li className='serbiya'>Terms conditins</li>
          </ul>
        </div>
        <div className="col-2">
          <ul className='list_ati'>
            <li className='serbiya'>Resources</li>
            <li className='serbiya'>Download app</li>
            <li className='serbiya'>Blog</li>
            <li className='serbiya'>What’s new</li>
            <li className='serbiya'>Sitemap</li>
          </ul>
        </div>
    </div>
  </div>
    </>
   )
  }
  export default Footer;
