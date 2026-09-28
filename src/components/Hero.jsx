import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FaGithub, FaFileDownload, FaArrowRight } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const { about, links } = portfolioData;

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            👋 Welcome to my portfolio
          </motion.div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">{about.name}</span>
          </h1>
          
          <h2 className="hero-subtitle">{about.role}</h2>
          
          <p className="hero-description">{about.description}</p>
          
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Projects <FaArrowRight />
            </a>
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <FaGithub /> GitHub Profile
            </a>
            <a href={links.resume} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <FaFileDownload /> Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="tech-sphere">
            <div className="glowing-orb"></div>
            <div className="code-block glass-card">
              <pre>
                <code>
{`const developer = {
  name: "${about.name}",
  skills: ["AI", "Full-Stack"],
  passion: "Problem Solving",
  build: () => "Intelligent Solutions"
};

developer.build();`}
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
