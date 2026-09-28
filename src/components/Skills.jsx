import { motion } from 'framer-motion';
import { skillsCategories } from '../data/skills';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Technical Skills</h2>
          <div className="title-underline"></div>
          
          <div className="skills-grid">
            {skillsCategories.map((category, index) => (
              <motion.div 
                key={index}
                className="skill-category glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, borderColor: 'rgba(6, 182, 212, 0.3)' }}
              >
                <div className="category-header">
                  <span className="category-icon text-accent">{category.icon}</span>
                  <h3 className="category-title">{category.title}</h3>
                </div>
                
                <div className="skills-list">
                  {category.items.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
