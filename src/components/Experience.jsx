import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import './Experience.css';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Experience & Activities</h2>
          
          <div className="timeline">
            {experience.map((exp, index) => (
              <motion.div 
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content glass-card">
                  <div className="timeline-header">
                    <h3 className="timeline-title">{exp.title}</h3>
                    <span className="timeline-date text-accent">{exp.date}</span>
                  </div>
                  <h4 className="timeline-org">{exp.organization}</h4>
                  <p className="timeline-desc">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
