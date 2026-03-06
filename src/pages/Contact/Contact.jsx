import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.scss';

function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  const contactInfo = {
    email: "mkabbas2014@gmail.com",
    phone: "+966 533 746 387",
    location: "Riyadh, Saudi Arabia",
    linkedin: "https://www.linkedin.com/in/mohmmad-abbas/",
    github: "https://github.com/ABBAS-PROJECT"
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(contactInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <motion.div 
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Get In Touch
        </motion.h1>
        
        <motion.p
          className="contact-intro"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Interested in working together? Feel free to reach out!
        </motion.p>
        
        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h2>Contact Information</h2>
            
            <div className="info-items">
              <div 
                className="info-item clickable"
                onClick={handleCopyEmail}
                title="Click to copy email"
              >
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>{contactInfo.email}</p>
                  {copiedEmail && <span className="copied-badge">✓ Copied!</span>}
                </div>
              </div>
              
              <div 
                className="info-item clickable"
                onClick={handleCopyPhone}
                title="Click to copy phone number"
              >
                <div className="info-icon">
                  <FaPhone />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>{contactInfo.phone}</p>
                  {copiedPhone && <span className="copied-badge">✓ Copied!</span>}
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>{contactInfo.location}</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <h3>Connect on Social Media</h3>
              <div className="social-buttons">
                <a 
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn linkedin"
                >
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn github"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="contact-cta"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="cta-card">
              <h3>Let's Work Together!</h3>
              <p>
                I'm currently seeking opportunities in software engineering where I can 
                contribute to production codebases and continue growing as a developer.
              </p>
              
              <div className="cta-features">
                <div className="cta-feature">
                  <span className="feature-icon">💼</span>
                  <div>
                    <h4>Open to Opportunities</h4>
                    <p>Entry-level or junior positions</p>
                  </div>
                </div>
                
                <div className="cta-feature">
                  <span className="feature-icon">🚀</span>
                  <div>
                    <h4>Quick Learner</h4>
                    <p>Eager to learn new technologies</p>
                  </div>
                </div>
                
                <div className="cta-feature">
                  <span className="feature-icon">🤝</span>
                  <div>
                    <h4>Team Player</h4>
                    <p>Collaborative and communicative</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="contact-note"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p>
            📬 I typically respond to emails within 24 hours. 
            For fastest response, connect with me on{' '}
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>!
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Contact;