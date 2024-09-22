import React from 'react';
import './Footer.css';  // We'll define styles in Footer.css

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Edgar's Website. All rights reserved.</p>
            <ul className="footer-links">
                <li><a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </footer>
    );
}

export default Footer;
