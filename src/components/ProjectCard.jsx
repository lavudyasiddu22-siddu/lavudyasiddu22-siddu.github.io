import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      className="project-card glass-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div className="project-top">
        <div className="project-header">
          <div className="project-icon">
            <FaFolder />
          </div>
          <div className="project-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
        
        <div className="project-category text-accent">{project.category}</div>
        <h3 className="project-title">{project.name}</h3>
        <p className="project-description">{project.description}</p>
      </div>
      
      <div className="project-tech">
        {project.technologies.map((tech, i) => (
          <span key={i} className="tech-chip">{tech}</span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
