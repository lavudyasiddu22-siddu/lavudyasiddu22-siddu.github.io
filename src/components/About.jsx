import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FaGraduationCap, FaMapMarkerAlt, FaLaptopCode, FaCalendarAlt } from 'react-icons/fa';
import './About.css';

const About = () => {
  const { about } = portfolioData;

  const infoCards = [
    {
      icon: <FaGraduationCap />,
      title: "Education",
      value: about.education
    },
    {
      icon: <FaCalendarAlt />,
      title: "Graduation",
      value: about.graduation
    },
    {
      icon: <FaLaptopCode />,
      title: "Focus",
      value: about.focus
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: about.location
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>About Me</h2>
          
          <div className="about-content">
            <div className="about-text glass-card">
              <p>{about.detailedDescription}</p>
            </div>
            
            <div className="about-cards">
              {infoCards.map((card, index) => (
                <motion.div 
                  key={index} 
                  className="info-card glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="card-icon text-accent">{card.icon}</div>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-value">{card.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
