import React from 'react'
import './style.css'
// import Image from "../Images/image"
/**
* @author
* @function Footer1
**/

 const Footer1 = (props) => {
     return(
         <>
    <div className="container">
        <div className="row justify-content-center mt-5">
            <div className="col-10">
                <div className="bigSea">
                    <h1 className='subsc'>Subscribe to get the Latest Offer</h1>
                    <p className='get'>Get our daily updates by subscribing to our newspaper, please drop your email below</p>
                     <div className="input">
                    <input className='gilamn' type="text" placeholder='Enter your email addres' />
                    <button className='subbtn'>Subscribe</button>
                     </div>
                </div>
            </div>
        </div>
    </div>
    </>
   )
  }
export default Footer1;