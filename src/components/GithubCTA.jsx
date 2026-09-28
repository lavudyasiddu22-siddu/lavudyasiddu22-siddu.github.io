import { motion } from 'framer-motion';
import { info } from '../data/info';
import { FaGithub } from 'react-icons/fa';
import './GithubCTA.css';

const GithubCTA = () => {
  return (
    <section className="github-cta-section">
      <div className="container">
        <motion.div
          className="cta-container glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="cta-content">
            <h2>Explore My GitHub</h2>
            <p>Explore my projects, experiments, and development work.</p>
            <p className="github-username">{info.links.githubUsername}</p>
          </div>
          
          <div className="cta-action">
            <a href={info.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary cta-btn">
              <FaGithub /> Visit GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubCTA;
