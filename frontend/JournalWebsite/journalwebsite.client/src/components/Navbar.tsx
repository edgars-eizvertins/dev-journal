import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // We'll define styles in Navbar.css

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h2>Edgar's Website</h2>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/cv">CV</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
