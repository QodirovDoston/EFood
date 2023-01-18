import React from 'react'
import './style.css'
const imfdf = require("../../img/img02.png")

/**
* @author
* @function Leg
**/

 const Leg = (props) => {
  return(
    <>
    <div className="container">
        <div  id='fut' className="row justify-content-between">
            <h1 className='super1'>What Our Client Are <span>Saying </span></h1>
            <div className="col-5">
            <img className='imfd' src={imfdf} alt="" />
            </div>

            <div className="col-6">
            <p className='pora'>EFood has the most intriguing food order system in the country. UI in both their app and web Is very simple and easy to use, enhancing the UX. Their delivery men are also quite professional and knows the neighborhood well. Till now I never had to guide them to my address for delivery; </p>
            <p className='Jole'>Anglina Jole</p>
            <p className='lover'>Food lover</p>
            </div>
        </div>
    </div>
    </>
   )
  }
export default Leg