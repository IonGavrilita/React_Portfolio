  
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-dark bg-gray-dark">
        <a className="navbar-brand" href="/react-portfolio">Ion Gavrilita</a>
        
        <ul className="nav navbar-nav ml-auto d-inline-block">
            <li className="nav-item d-inline-block">
                <Link to="/react-portfolio/about" className={location.pathname === "/react-portfolio/about" ? "nav-link active" : "nav-link"}>
                About
                </Link>
            </li>
            
            <li className="nav-item d-inline-block ml-2">
                <Link
                to="/react-portfolio/contact"
                className={location.pathname === "/react-portfolio/contact" ? "nav-link active" : "nav-link"}
                >
                Contact
                </Link>
            </li>
            <li className="nav-item d-inline-block ml-2">
                <Link
                to="/react-portfolio/portfolio"
                className={location.pathname === "/react-portfolio/portfolio" ? "nav-link active" : "nav-link"}
                >
                Portfolio
                </Link>
            </li>
            <li className="nav-item d-inline-block ml-2">
                <Link
                to="/react-portfolio/resume"
                className={location.pathname === "/react-portfolio/resume" ? "nav-link active" : "nav-link"}
                >
                Resume
                </Link>
            </li>
            
        </ul>
    </nav>
  );
}

export default Navbar;