import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Shoaib Akhtar</div>
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="navbar-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="navbar-actions">
          <button className="theme-toggle" onClick={toggleTheme}>
            <FontAwesomeIcon
              icon={theme === 'light' ? faMoon : faSun}
              style={{ color: theme === 'light' ? '#FFD700' : 'inherit' }}
            />
          </button>
          <button className="navbar-toggle" onClick={handleMenuToggle}>
            <span className="hamburger"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;