import React from 'react'
import "./style.css"
const icon = require("../../img/EFood.png")
const search1 = require("../../img/Search.png")
const search = require("../../img/cart.png")

 const Navbar = (props) => {
  return(
    <>
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <form class="d-flex">
      {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>

   < div id='navnar' className="container">
            <div className="row mt-5">
                <div className="col-3" >
                    <img src={icon} alt="" />
                </div>
                <div className="col-6">
                    <ul className="list d-flex">
                        <li className="list_item">Home</li>
                        <li className="list_item">Service</li>
                        <li className="list_item">Top Sites</li>
                        <li className="list_item">Contact</li>
                        <div className="list_icon mr-5">
                        <img src={search}  className="search" alt="" />
                        <img src={search1} className="search1"  alt="" />
                        </div>
                    </ul>
                </div>
                <div className="col-3">
                    <button className="btn_naw">Sign Up</button>
                </div>
            </div>
         </div>
    </>
   )
  };
export default Navbar;