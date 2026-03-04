// ============================================
// EDUCATION.JSX - EDUCATION PAGE
// ============================================
// University degree and coursework information
// ============================================

import React from 'react';
import { motion } from 'framer-motion';
import './Education.scss';

function Education() {
  // ============================================
  // EDUCATION DATA
  // ============================================
  // From your CV
  // ============================================
  
  const education = {
    university: "Universiti Tenaga Nasional",
    degree: "Bachelor of Computer Science (Software Engineering) (Hons.)",
    location: "Putrajaya, Malaysia",
    graduation: "September 2025",
    coursework: [
      "Software Engineering",
      "Database Systems",
      "Web Development",
      "Mobile Application Development",
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      "Computer Networks",
      "Operating Systems",
      "Software Requirements Engineering"
    ]
  };

  return (
    <motion.div 
      className="education"
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
          Education
        </motion.h1>
        
        <motion.div
          className="education-card"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="education-header">
            <div className="education-icon">🎓</div>
            <div className="education-info">
              <h2>{education.university}</h2>
              <h3>{education.degree}</h3>
              <div className="education-meta">
                <span className="location">{education.location}</span>
                <span className="graduation">Graduated: {education.graduation}</span>
              </div>
            </div>
          </div>
          
          <div className="coursework-section">
            <h4>Relevant Coursework</h4>
            <div className="coursework-grid">
              {education.coursework.map((course, index) => (
                <motion.div
                  key={course}
                  className="course-item"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 + (index * 0.05), duration: 0.3 }}
                >
                  <span className="course-bullet">▹</span>
                  {course}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div
          className="education-highlights"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="highlight">
            <div className="highlight-icon">💡</div>
            <div>
              <h4>Strong Foundation</h4>
              <p>Comprehensive coursework covering software development, systems design, and modern development practices</p>
            </div>
          </div>
          
          <div className="highlight">
            <div className="highlight-icon">🚀</div>
            <div>
              <h4>Practical Experience</h4>
              <p>Applied knowledge through final year project and internship at Smart Link</p>
            </div>
          </div>
          
          <div className="highlight">
            <div className="highlight-icon">📚</div>
            <div>
              <h4>Continuous Learning</h4>
              <p>Always exploring new technologies, frameworks, and development methodologies</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Education;
