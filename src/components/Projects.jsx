import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'AI', 'Web', 'Computer Vision', 'Cybersecurity', 'Education', 'Monitoring'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Featured Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Selected projects where I explore AI, software engineering, and real-world applications.</p>
          
          <div className="project-filters">
            {categories.map((cat, index) => (
              <button 
                key={index}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
