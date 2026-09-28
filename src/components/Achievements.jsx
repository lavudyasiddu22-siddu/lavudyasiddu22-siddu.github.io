import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FaAward } from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Achievements</h2>
          
          <div className="achievements-grid">
            {achievements.map((item, index) => (
              <motion.div 
                key={index}
                className="achievement-card glass-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="achievement-icon text-accent">
                  <FaAward />
                </div>
                <div className="achievement-content">
                  <h3 className="achievement-title">{item.title}</h3>
                  <p className="achievement-desc">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
