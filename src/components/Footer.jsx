import { info } from '../data/info';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>{info.name}</h3>
            <p>Building ideas into intelligent solutions.</p>
          </div>
          
          <div className="footer-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href={info.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-links">
            <a href={info.links.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href={info.links.linkedin !== 'YOUR_LINKEDIN_URL_HERE' ? info.links.linkedin : '#'} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href={`mailto:${info.links.email}`}><FaEnvelope /></a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 {info.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
