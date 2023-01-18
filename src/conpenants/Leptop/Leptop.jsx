import React from 'react'
import './style.css'
const imfhf = require('../../img/Timericon.png')
const food = require('../../img/food delivery 4.png')
// const Timer = require('../../img/Timer icon.png')
// const Resturent = require('../../img/Resturent icon.png')
// const delivery = require('../../img/delivery 1.png')

 const Leptop = (props) => {
    return (
        <>
            <div className="container">
            <div id='fut' className="row ">
                    <div className="col-5">
                        <img className='food' src={food} alt="" />
                    </div>
                    <div className="col-7">
                        <h1 className='super'><span>Stay </span> at home, we will Provide <span>good food</span> </h1>
                        <p className='poragrow'>We provide tasty food and superfast delivery at your home.  Let’s use our services right now and get discounts of up to 50%.</p>
                    <div className="yetkazib ">
                        <img src={imfhf} alt="" />
                        <h3 className='fast'>fasted delivery in 30 Minutes</h3>
                    </div>
                    <div className="yetkazib">
                        <img src={imfhf} alt="" />
                        <h3 className='fast'>fasted delivery in 30 Minutes</h3>
                    </div>
                    <div className="yetkazib">
                        <img src={imfhf} alt="" />
                        <h3 className='fast'>fasted delivery in 30 Minutes</h3>
                    </div>
                    <button className='btum'>See more</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Leptop;