import { motion } from 'framer-motion';
import { info } from '../data/info';
import { FaFileDownload } from 'react-icons/fa';
import './ResumeCTA.css';

const ResumeCTA = () => {
  return (
    <section className="resume-cta-section">
      <div className="container">
        <motion.div
          className="resume-container glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="resume-content">
            <h2>Interested in my work?</h2>
            <p>Download my resume to learn more about my education, technical skills, projects, and experience.</p>
          </div>
          
          <div className="resume-action">
            <a href={info.links.resume} target="_blank" rel="noopener noreferrer" className="btn btn-primary cta-btn">
              <FaFileDownload /> Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeCTA;
