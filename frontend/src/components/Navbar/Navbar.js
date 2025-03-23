import React from "react";
import './Navbar.css';
import { ArrowLeft, Settings, Share } from "react-feather";
import applelogo from '../Assets/applelogo.png';



function Navbar() {
    return(
        <div className="navbar">
          <button className="arrowbtn">
          <ArrowLeft />
          </button>
          <button className="imgbtn">
            <img className="img" src={applelogo}></img>
          </button>
          <div className="apple">
          <p><b>Apple</b></p>
          <p className="members">5 boards - 24 members</p>
          </div>
          <input className="searchbar" type="search" placeholder="Search" />
          
          <button className="sharebtn">
          <Share />
          </button>
          <button className="settingbtn">
            <Settings/>
          </button>
          
          
          
          
        </div>

    )

}
export default Navbar;