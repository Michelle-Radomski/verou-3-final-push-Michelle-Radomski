import React from "react";
import {useState} from "react";
import { Link } from "react-router-dom";
import dysmantleLogo from "../images/Dysmantle-logo.png";

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
                        {/* DYSMANTLE <i className="fa fa-tree"></i> */}
                        <img src={dysmantleLogo} alt="Dysmantle logo." /> 
                    </Link>
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
                </div>
            </nav>
        </>
    ); 
}

export default Navbar;
