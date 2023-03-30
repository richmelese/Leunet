import React from 'react'
import logo from "../Assets/logo.png";

export default function MainMenu() {
  return (
    <div className='main_menu container'>
        <div className='logo_wrapper'>
            <img src={logo} alt="logo" />
        </div>
        <div className='menu_items_wrapper'>
            <ul>
                <li><a href="/">About</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Solutions</a></li>
                <li><a href="/">Products</a></li>
            </ul>
            <button>Get Quote</button>
        </div>
    </div>
  )
}
