import { portfolioData } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const { about, links } = portfolioData;
  const currentYear = new Date().getFullYear();
  // Ensure the copyright year is at least 2026 based on requirements
  const displayYear = currentYear < 2026 ? 2026 : currentYear;

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>{about.name}</h3>
            <p>Building ideas into intelligent solutions.</p>
          </div>
          
          <div className="footer-links">
            <a href={links.github} target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
            <a href={links.linkedin !== 'YOUR_LINKEDIN_URL_HERE' ? links.linkedin : '#'} target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
            <a href={`mailto:${links.email}`}><FaEnvelope /> Email</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {displayYear} {about.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
