import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/">
                        DYSMANTLE
                    </Link>
                </div>
            </nav>
        </>
    ); 
}

export default Navbar;
