import React from 'react'
import "./style.css"
const pia1 = require("../../img/Rectangle 53 (2).png")
const pia2 = require("../../img/Vector.png")
const pia3 = require("../../img/Group.png")
// const pitsa4 =require("../../img/Rectangle 53 (4).png")
// const pitsa5 =require("../../img/Rectangle 53 (5).png")
// const pitsa6 =require("../../img/Rectangle 53 (6).png")
// const pitsa7 =require("../../img/Rectangle 53 (7).png")
 const Section1 = (props) => {
    return (
        <>
            <div  className="container">
                <div id='fut' className="row justify-content-between ">
                    <h1 className='super1'>Top Food <span>restaurant</span></h1>
                    <div className="col-3 ">
                        <div className="oycard">
                            <img id="parody" src={pia1} alt="" />
                            <p className='Blaze'>Blaze Pizza</p>
                            <div className="des">
                                <img className='whatch' src={pia3} alt="" />
                                <p className='ocklas'>  11.00 AM - 10.00 PM</p>
                                <button className='btu'><img src={pia2} alt="" /></button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="oycard">
                            <img id="parody" src={pia1} alt="" />
                            <p className='Blaze'>Blaze Pizza</p>
                            <div className="des">
                                <img className='whatch' src={pia3} alt="" />
                                <p className='ocklas'>  11.00 AM - 10.00 PM</p>
                                <button className='btu'><img src={pia2} alt="" /></button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="oycard">
                            <img id="parody" src={pia1} alt="" />
                            <p className='Blaze'>Blaze Pizza</p>
                            <div className="des">
                                <img className='whatch' src={pia3} alt="" />
                                <p className='ocklas'>  11.00 AM - 10.00 PM</p>
                                <button className='btu'><img src={pia2} alt="" /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='fut' className="row justify-content-between mt-5">
                    <div className="col-3 ">
                        <div className="oycard">
                            <img id="parody" src={pia1} alt="" />
                            <p className='Blaze'>Blaze Pizza</p>
                            <div className="des">
                                <img className='whatch' src={pia3} alt="" />
                                <p className='ocklas'>  11.00 AM - 10.00 PM</p>
                                <button className='btu'><img src={pia2} alt="" /></button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="oycard">
                            <img id="parody" src={pia1} alt="" />
                            <p className='Blaze'>Blaze Pizza</p>
                            <div className="des">
                                <img className='whatch' src={pia3} alt="" />
                                <p className='ocklas'>  11.00 AM - 10.00 PM</p>
                                <button className='btu'><img src={pia2} alt="" /></button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="oycard">
                            <img id="parody" src={pia1} alt="" />
                            <p className='Blaze'>Blaze Pizza</p>
                            <div className="des">
                                <img className='whatch' src={pia3} alt="" />
                                <p className='ocklas'>  11.00 AM - 10.00 PM</p>
                                <button className='btu'><img src={pia2} alt="" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Section1;
