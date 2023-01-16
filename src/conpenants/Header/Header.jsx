import React from 'react'
import './header.css'
const scuter = require("../../img/Scooter Guy.png")

 const Header = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <h1 className='super'>super fast <span>Food
              delivery</span> service</h1>
            <p className='poragrow'>We provide super fast-delivery service. Let's use our services right now and get discounts of up to 50%</p>
            <div className="both_price">
              <button className='export'>Explore Food</button>
              <p className='app'>Download App</p>
            </div>
          </div>
          <div className="col-6">
            <img className='scuter' src={scuter} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
};
export default Header;