import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>Under-Warld Tailers</h1>
            <div className="header">
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/about">About us</a>
            </div>
        </nav>
    );
};

export default Navbar;
