import '../../App.css';
import React from 'react'
import {Link} from 'react-router-dom';

function Nav() {
    const navStyle = {
        "color": 'white',
        "font-size": "25px"
    };

    return (
        <nav>
            <img src="https://devstickers.com/assets/img/pro/1lud.png" alt="robot" width="5%" height="5%"/>
            <ul className="nav-links">
                <Link to={"/"} style={navStyle}>
                    <li>Home</li>
                </Link>
                <Link to={"/shop"} style={navStyle}>
                    <li>Shop</li>
                </Link>
                <Link to={"/cart"} style={navStyle}>
                    <li>Cart</li>
                </Link>
            </ul>
        </nav>
    )
  }

export default Nav;