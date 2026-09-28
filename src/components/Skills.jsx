import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FaCode, FaLaptopCode, FaServer, FaDatabase, FaTools, FaRobot } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    { title: "Programming", icon: <FaCode />, items: skills.programming },
    { title: "Frontend", icon: <FaLaptopCode />, items: skills.frontend },
    { title: "Backend", icon: <FaServer />, items: skills.backend },
    { title: "Database", icon: <FaDatabase />, items: skills.database },
    { title: "Tools", icon: <FaTools />, items: skills.tools },
    { title: "AI / ML", icon: <FaRobot />, items: skills.ai },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>My Skills</h2>
          
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index}
                className="skill-category glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="category-header">
                  <span className="category-icon text-accent">{category.icon}</span>
                  <h3 className="category-title">{category.title}</h3>
                </div>
                
                <div className="skills-list">
                  {category.items.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
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
