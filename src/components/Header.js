import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>With Data</h1>
        <p>The Dirt says Hot, The Label says data.<br />
        Created with <a href="#">Passion</a>.</p>
    </header>
)

export default Header
