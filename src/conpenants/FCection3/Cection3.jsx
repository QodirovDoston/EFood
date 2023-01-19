import React from 'react'
import './style.css'
const imf = require('../../img/img01.png')
const imfw = require('../../img/img03.png')
const imfwe = require('../../img/img04.png')



 const Cection3 = (props) => {
  return(
    <>
     <div className="container">
        <div  id='fut' className="row justify-content-between">
            <div className="col-5">
                <h1 className='assum'>Download  Our <span>Mobile App</span></h1>
                <p className='poragrow '>It's all at your fingertips -- the restaurants you love. Find the right food to suit your mood, and make the first bite last. Go ahead, download app and get 50% discount</p>
                <div className="dule">
                    <img src={imfw} alt="" />
                    <img src={imfwe} alt="" />

                </div>
            </div>
            <div className="col-5">
                    <img className='tellefon' src={imf} alt="" />
            </div>
        </div>
     </div>
    </>
   )
  }
export default Cection3;