import React, { Component } from "react";
import "./header.css";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div className="headerContainer">
        <Link style={{textDecoration: 'none', color: 'white'}} className='logo' to="/">UTOPIA</Link>
        <div className="links">
          <Link style={{textDecoration: 'none', color: 'white'}} className='contactText' to="/contact">CONTACT</Link>
          <div className='divider'> / </div>
          <div style={{textDecoration: 'none', color: 'white'}} >CART</div>
        </div>
      </div>
    );
  }
}

export default Header;
