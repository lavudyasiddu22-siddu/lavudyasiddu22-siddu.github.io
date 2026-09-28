import { useState, useEffect } from 'react';
import { info } from '../data/info';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <div className="logo">
          <a href="#home">{info.name.split(' ')[0]}<span className="text-accent">.</span></a>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a href={info.links.github} target="_blank" rel="noopener noreferrer" className="github-icon" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
          
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} onClick={() => setIsOpen(false)}>{link.name}</a>
            </li>
          ))}
          <li>
            <a href={info.links.github} target="_blank" rel="noopener noreferrer" className="mobile-github-btn">
              <FaGithub /> GitHub Profile
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
