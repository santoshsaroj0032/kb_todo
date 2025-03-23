
import React from "react";
import "./Navbar.css";
import { ArrowLeft, Settings, Share } from "react-feather";
import applelogo from "../Assets/applelogo.png";

function Navbar() {
  return (
    <div className="navbar">
      <button className="arrow-btn">
        <ArrowLeft />
      </button>
      <div className="brand">
        <img className="logo" src={applelogo} alt="Company Logo" />
        <div className="brand-info">
          <p className="brand-name"><b>Apple</b></p>
          <p className="brand-members">5 boards - 24 members</p>
        </div>
      </div>
      
      <input className="searchbar" type="search" placeholder="Search..." />

      <div className="actions">
        <button className="icon-btn">
          <Share />
        </button>
        <button className="icon-btn">
          <Settings />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
