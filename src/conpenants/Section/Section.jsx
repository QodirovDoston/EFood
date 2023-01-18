import React from 'react'
import '../Section/style.css'
const asia = require('../../img/Asian.png')
const item1 = require('../../img/item1.png')
const Star = require('../../img/Star.png')



// const Burger = require('../../img/Burger.png')
// const Pizza = require('../../img/Pizza.png')
// const Set = require('../../img/Set.png')
// const sandwith = require('../../img/sandwith.png')
// const Set1 = require('../../img/Set menu(1).png')

 const Section = (props) => {
  return(
    <div>
        <div className="container">
            <div id='cards' className="row mt-3 justify-content-between">
                <div className="col-12">
                    <h1 className='super1'>Our popular <span>Category</span>  </h1>
                </div>
                <div className="col-2">
                    <img src={asia} alt="" />
                    <div className="card">
                     <img className='photo' src={item1} alt="" />
                     <img className='photo' src={Star} alt="" />
                     <p className='malumot'>Cheeseburger With Salad</p>
                     <p className='price'>$18.00</p>
                     <button className='card_btn'>Add to Cart</button>
                    </div>
                </div>
                <div className="col-2">
                    <img src={asia} alt="" />
                    <div className="card">
                     <img className='photo' src={item1} alt="" />
                     <img className='photo' src={Star} alt="" />
                     <p className='malumot'>Cheeseburger With Salad</p>
                     <p className='price'>$18.00</p>
                     <button className='card_btn'>Add to Cart</button>
                    </div>
                </div>
                <div className="col-2">
                    <img src={asia} alt="" />
                    <div className="card">
                     <img className='photo' src={item1} alt="" />
                     <img className='photo' src={Star} alt="" />
                     <p className='malumot'>Cheeseburger With Salad</p>
                     <p className='price'>$18.00</p>
                     <button className='card_btn'>Add to Cart</button>
                    </div>
                </div>
                <div className="col-2">
                    <img src={asia} alt="" />
                    <div className="card">
                     <img className='photo' src={item1} alt="" />
                     <img className='photo' src={Star} alt="" />
                     <p className='malumot'>Cheeseburger With Salad</p>
                     <p className='price'>$18.00</p>
                     <button className='card_btn'>Add to Cart</button>
                    </div>
                </div>
                <div className="col-2">
                    <img src={asia} alt="" />
                    <div className="card">
                     <img className='photo' src={item1} alt="" />
                     <img className='photo' src={Star} alt="" />
                     <p className='malumot'>Cheeseburger With Salad</p>
                     <p className='price'>$18.00</p>
                     <button className='card_btn'>Add to Cart</button>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
   )
  }
  export default Section;