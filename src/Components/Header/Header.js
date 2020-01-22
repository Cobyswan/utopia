import React, { Component } from 'react';
import './header.css'

export class Header extends Component {
    render() {
        return (
            <div className='headerContainer'>
                <div className='logo'>UTOPIA</div>
                <div className='links'>
                <div>Contact</div>
                <div>Cart</div>
                </div>
            </div>
        );
    }
}

export default Header;
