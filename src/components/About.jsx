import { motion } from 'framer-motion';
import { info } from '../data/info';
import { FaGraduationCap, FaBrain, FaCode, FaLaptopCode } from 'react-icons/fa';
import './About.css';

const About = () => {
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
          <div className="title-underline"></div>
          
          <div className="about-content">
            <div className="about-text glass-card">
              <p>I'm a Computer Science Engineering student passionate about building technology that solves practical problems. My interests span Artificial Intelligence, full-stack development, software engineering, computer vision, and modern web technologies.</p>
              <p>I enjoy turning ideas into working products, experimenting with emerging technologies, and participating in hackathons and technical projects.</p>
            </div>
            
            <div className="about-cards">
              <motion.div className="info-card glass-card" whileHover={{ y: -5 }}>
                <div className="card-icon"><FaGraduationCap /></div>
                <div className="card-content">
                  <h3 className="card-title">Education</h3>
                  <p className="card-value">{info.education.degree}</p>
                  <p className="card-subvalue">{info.education.major}</p>
                  <p className="card-subvalue text-accent">{info.education.graduation}</p>
                </div>
              </motion.div>

              <motion.div className="info-card glass-card focus-card" whileHover={{ y: -5 }}>
                <div className="card-icon"><FaBrain /></div>
                <div className="card-content">
                  <h3 className="card-title">Current Focus</h3>
                  <ul className="focus-list">
                    <li><FaCode className="text-accent" /> AI & Machine Learning</li>
                    <li><FaLaptopCode className="text-accent" /> Full-Stack Development</li>
                    <li><FaCode className="text-accent" /> Software Engineering</li>
                    <li><FaLaptopCode className="text-accent" /> Problem Solving</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
