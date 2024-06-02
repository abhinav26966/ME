import React from "react";

const Navbar = () => {
return (
    <nav className="navbar">
    <div className="max-width">
        <div className="logo">
        <a href="#home">
            <span>Abhinav Nagar's </span><span> Portfolio...</span>
        </a>
        </div>
        <ul className="menu">
        <li><a href="#home" className="menu-btn"><strong>Home</strong></a></li>
        <li><a href="#about" className="menu-btn"><strong>About Me</strong></a></li>
        <li><a href="#services" className="menu-btn"><strong>Skills</strong></a></li>
        <li><a href="#skills" className="menu-btn"><strong>Projects</strong></a></li>
        <li><a href="#contact" className="menu-btn"><strong>Contact Me</strong></a></li>
        </ul>
        <div className="menu-btn">
        <i className="fas fa-bars"></i>
        </div>
    </div>
    </nav>
);
};

export default Navbar;
