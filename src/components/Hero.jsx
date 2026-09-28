import { motion } from 'framer-motion';
import { info } from '../data/info';
import { FaGithub, FaFileDownload, FaArrowRight, FaProjectDiagram, FaTrophy, FaCodeBranch } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
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
            {info.badge}
          </motion.div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">{info.name.split(' ')[0]}</span> Nayak.
          </h1>
          
          <h2 className="hero-subtitle">{info.shortRole}</h2>
          
          <p className="hero-description">{info.description}</p>
          
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              Explore My Projects <FaArrowRight />
            </a>
            <a href={info.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <FaGithub /> View GitHub
            </a>
            <a href={info.links.resume} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <FaFileDownload /> Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Abstract AI / Network Visualization */}
          <div className="ai-network">
            <div className="core-node"></div>
            <div className="orbit orbit-1">
              <div className="satellite-node"></div>
            </div>
            <div className="orbit orbit-2">
              <div className="satellite-node s2"></div>
              <div className="satellite-node s3"></div>
            </div>
            <div className="orbit orbit-3">
              <div className="satellite-node s4"></div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Quick Stats */}
      <div className="container stats-container">
        <motion.div 
          className="stats-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="stat-card glass-card">
            <div className="stat-icon"><FaCodeBranch /></div>
            <div className="stat-info">
              <h4>{info.education.degree} {info.education.major}</h4>
              <p>Graduating {info.education.graduation.replace('Expected Graduation: ', '')}</p>
            </div>
          </div>
          <div className="stat-card glass-card">
            <div className="stat-icon"><FaProjectDiagram /></div>
            <div className="stat-info">
              <h4>AI & Software</h4>
              <p>Development Focus</p>
            </div>
          </div>
          <div className="stat-card glass-card">
            <div className="stat-icon"><FaTrophy /></div>
            <div className="stat-info">
              <h4>Hackathons</h4>
              <p>Active Participant</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
