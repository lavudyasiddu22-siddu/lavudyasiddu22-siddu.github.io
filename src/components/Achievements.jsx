import { motion } from 'framer-motion';
import { achievements } from '../data/info';
import { FaTrophy } from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Achievements & Highlights</h2>
          <div className="title-underline"></div>
          
          <div className="achievements-grid">
            {achievements.map((item, index) => (
              <motion.div 
                key={index}
                className="achievement-card glass-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, borderColor: 'rgba(6, 182, 212, 0.3)' }}
              >
                <div className="achievement-icon text-accent">
                  <FaTrophy />
                </div>
                <div className="achievement-content">
                  <h3 className="achievement-title">{item.title}</h3>
                  <p className="achievement-desc">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="achievements-footer">
            <p className="text-secondary">More achievements and certifications will be added here.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
