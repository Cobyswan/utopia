import React, { Component } from "react";
import "./header.css";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div className="headerContainer">
        <Link className='logo' to="/">UTOPIA</Link>
        <div className="links">
          <Link to="/contact">Contact</Link>
          <div>Cart</div>
        </div>
      </div>
    );
  }
}

export default Header;
