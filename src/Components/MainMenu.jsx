import React, { useState, useLayoutEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

export default function MainMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="main_menu container">
            <div className="logo_wrapper">
                <a href="/">
                    <img src={logo} alt="logo" />
                </a>
            </div>
            <div className={`menu_items_wrapper ${isOpen ? "open" : ""}`}> 
                <ul className="menu_items">
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/services">Services</a>
                    </li>
                    <li>
                        <a href="/solutions">Solutions</a>
                    </li>
                    <li>
                        <a href="/products">Products</a>
                    </li>

                    <button
                        onClick={() => {
                            window.location = "contact-us";
                        }}
                        className="mobile_only"
                    >
                        Contact Us
                    </button>
                </ul>

                <button
                    onClick={() => {
                        window.location = "contact-us";
                    }}
                    className="desktop_only"
                >
                    Contact Us
                </button>
            </div>
            <div className="hamburger_menu_icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
        </div>
    );
}
