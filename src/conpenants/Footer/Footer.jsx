import React from 'react'
import './Style.css'
const icon = require("../../img/EFood.png")
 
const Footer = (props) => {
  return(
    <>
  <div className="container">
    <div className="row justify-content-around mt-5">
        <div className="col-3"> 
            <img className='efood' src={icon} alt="" />
          <ul className='list_ati'>
            <li className='serbiya'> <i class="fa-sharp fa-solid fa-location-dot"></i>Dhaka, Bangladesh</li>
            <li className='serbiya'><i class="fa-solid fa-phone-volume"></i> 0943833399</li>
            <li className='serbiya'>  <i class="fa-solid fa-envelope"></i>   support@efood.com</li>
          </ul>
          <div className="callsenter">
            <div className="defo">
          <i class="fa-brands fa-facebook"></i>
            </div>
            <div className="defo">
          <i class="fa-brands fa-twitter"></i>
            </div>
            <div className="defo">
          <i class="fa-brands fa-square-instagram"></i>
            </div>
            <div className="defo">
          <i class="fa-sharp fa-solid fa-paper-plane"></i>
            </div>
          </div>
        </div>
        <div className="col-2">
          <ul className='list_ati'>
            <li className='serbiya'>Service</li>
            <li className='serbiya1'>How it works</li>
            <li className='serbiya1'>Home delivery</li>
            <li className='serbiya1'>Prducts</li>
            <li className='serbiya1'>Menu</li>
          </ul>
        </div>
        <div className="col-2">
          <ul className='list_ati'>
            <li className='serbiya'>Company</li>
            <li className='serbiya1'>About Us</li>
            <li className='serbiya1'>News</li>
            <li className='serbiya1'>Our trusted partner</li>
            <li className='serbiya1'>New users FAQ</li>
          </ul>
        </div>
        <div className="col-2">
          <ul className='list_ati'>
            <li className='serbiya'> Supports</li>
            <li className='serbiya1'>Help center</li>
            <li className='serbiya1'>Feedbcak</li>
            <li className='serbiya1'>Contact us</li>
            <li className='serbiya1'>Terms conditins</li>
          </ul>
        </div>
        <div className="col-2">
          <ul className='list_ati'>
            <li className='serbiya'>Resources</li>
            <li className='serbiya1'>Download app</li>
            <li className='serbiya1'>Blog</li>
            <li className='serbiya1'>What’s new</li>
            <li className='serbiya1'>Sitemap</li>
          </ul>
        </div>
    </div>
  </div>
  <hr />
  <div className="container">
    <div className="row justify-content-between mt-5">
      <div className="col-5">
        <p className='privade'>© 2021 EFood - All rights reserved.</p>
      </div>
      <div className="col-3 d-flex justify-content-between">
        <p className='privade'>Privacy</p>
        <p className='privade'>Security</p>
        <p className='privade'>Terms</p>

      </div>
    </div>
  </div>
    </>
   )
  }
  export default Footer;
