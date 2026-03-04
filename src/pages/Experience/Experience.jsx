// ============================================
// EXPERIENCE.JSX - EXPERIENCE PAGE
// ============================================
// Work experience and internships
// ============================================

import React from 'react';
import { Link } from 'react-router-dom'; // ADDED THIS IMPORT
import { motion } from 'framer-motion';
import './Experience.scss';

function Experience() {
  // ============================================
  // EXPERIENCE DATA
  // ============================================
  // From your CV - Smart Link internship
  // ============================================
  
  const experiences = [
    {
      title: "Software Development Intern",
      company: "Smart Link",
      location: "Riyadh, Saudi Arabia",
      period: "Jul 2024 - Sep 2024",
      type: "Internship",
      responsibilities: [
        "Contributed to Kayako Ticketing System development using Laravel (PHP) and MySQL, gaining practical experience in enterprise-level web application development",
        "Implemented ticket management features including classification, prioritization, and user permission controls as part of a collaborative development team",
        "Worked with Laravel framework and MVC architecture to build scalable backend modules for ticket tracking and workflow automation"
      ],
      technologies: ["Laravel", "PHP", "MySQL", "MVC Architecture", "Git"]
    }
  ];

  return (
    <motion.div 
      className="experience"
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
          Work Experience
        </motion.h1>
        
        <motion.p
          className="experience-intro"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Professional experience in software development
        </motion.p>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 + (index * 0.2), duration: 0.6 }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <div>
                    <h2>{exp.title}</h2>
                    <h3>{exp.company}</h3>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-type">{exp.type}</span>
                    <span className="experience-period">{exp.period}</span>
                    <span className="experience-location">{exp.location}</span>
                  </div>
                </div>
                
                <ul className="responsibilities">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
                
                <div className="technologies">
                  <span className="tech-label">Technologies:</span>
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="experience-cta"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <h3>Seeking Opportunities</h3>
          <p>
            Looking for entry-level or junior software engineering positions where I can 
            contribute to production codebases and learn from experienced developers.
          </p>
          <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Experience;