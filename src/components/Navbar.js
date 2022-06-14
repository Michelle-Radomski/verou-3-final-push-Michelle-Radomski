import React from "react";
import {useState} from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [click, setClick] = useState(false);
    const toggleMenu = () => {
        setClick(!click);
    }
    const closeMobileMenu = () => {
        setClick(false);
    }
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        DYSMANTLE <i className="fa fa-tree"></i> 
                    </Link>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    <i className={click ? "fa fa-times" : "fa fa-bars" }></i>
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/weapons' className="nav-links" onClick={closeMobileMenu}>
                            Weapons
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    ); 
}

export default Navbar;
