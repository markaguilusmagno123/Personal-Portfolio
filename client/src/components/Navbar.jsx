import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <header className="navbar">
            <div className="navbar-container">

                <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
                    <h2>MyPortfolio</h2>
                    <span>Mark Aguilus Magno</span>
                </NavLink>

                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? '✕' : '☰'}
                </button>

                <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                    <NavLink to="/" onClick={closeMenu}>Home</NavLink>
                    <NavLink to="/about" onClick={closeMenu}>About</NavLink>
                    <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
                    <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
                    <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
                </nav>

            </div>
        </header>
    );
}

export default Navbar;