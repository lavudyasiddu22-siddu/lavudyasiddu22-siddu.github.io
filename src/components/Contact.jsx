import { useState } from 'react';
import { motion } from 'framer-motion';
import { info } from '../data/info';
import { FaGithub, FaEnvelope, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:${info.links.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Let's Connect</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">I'm always interested in learning, building, collaborating, and exploring new opportunities.</p>
          
          <div className="contact-container">
            <div className="contact-info glass-card">
              <h3>Get In Touch</h3>
              
              <div className="social-links">
                <a href={info.links.github} target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon"><FaGithub /></span>
                  <span className="social-text">GitHub</span>
                </a>
                <a href={info.links.linkedin !== 'YOUR_LINKEDIN_URL_HERE' ? info.links.linkedin : '#'} target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon"><FaLinkedin /></span>
                  <span className="social-text">LinkedIn</span>
                </a>
                <a href={`mailto:${info.links.email}`} className="social-link">
                  <span className="social-icon"><FaEnvelope /></span>
                  <span className="social-text">Email</span>
                </a>
              </div>
            </div>
            
            <div className="contact-form-container glass-card">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                    placeholder="Your message here..."
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary submit-btn">
                  Send Message <FaPaperPlane />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
