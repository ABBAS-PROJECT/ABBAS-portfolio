import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFileDownload } from 'react-icons/fa';
import './Home.scss';

// FIXED: Move roles outside component to prevent recreation
const ROLES = [
  'Software Engineering',
  'Full Stack Developer',
  'Game Developer'
];

function Home() {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  
  // FIXED: Proper typing animation
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let currentIndex = 0;
    let isDeleting = false;
    let timeoutId;
    
    const type = () => {
      if (!isDeleting && currentIndex <= currentRole.length) {
        // Typing
        setTypedText(currentRole.slice(0, currentIndex));
        currentIndex++;
        timeoutId = setTimeout(type, 100);
      } else if (!isDeleting && currentIndex > currentRole.length) {
        // Pause before deleting
        timeoutId = setTimeout(() => {
          isDeleting = true;
          type();
        }, 2000);
      } else if (isDeleting && currentIndex > 0) {
        // Deleting
        currentIndex--;
        setTypedText(currentRole.slice(0, currentIndex));
        timeoutId = setTimeout(type, 50);
      } else if (isDeleting && currentIndex === 0) {
        // Move to next role
        isDeleting = false;
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    };
    
    type();
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [roleIndex]); // FIXED: Only depend on roleIndex

  return (
    <motion.div 
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="hero">
          <motion.div className="greeting" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>
            👋 Hi, I'm
          </motion.div>
          
          <motion.h1 className="name" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}>
            Mohammed Abbas
          </motion.h1>
          
          <motion.div className="title" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }}>
            <span className="typing-text">{typedText}</span>
            <span className="cursor">|</span>
          </motion.div>
          
          <motion.p className="tagline" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 0.6 }}>
            Building web applications, mobile apps, and games.  
            Combining technical skills with creative problem-solving.
          </motion.p>
          
          <motion.div className="cta-buttons" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, duration: 0.6 }}>
            <Link to="/projects" className="btn btn-primary">View My Work</Link>
            <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
            <a 
              href="https://drive.google.com/file/d/1UF_bYrxOavAWmpjYANu1OzJv-RhHtjtm/view"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-cv"
            >
              <FaFileDownload /> My CV
            </a>
          </motion.div>
          
          <motion.div className="quick-stats" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }}>
            <div className="stat">
              <span className="stat-number">3</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-number">6+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat">
              <span className="stat-number">1</span>
              <span className="stat-label">Internship</span>
            </div>
          </motion.div>
        </div>
        
        <motion.div className="quick-nav-section" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.4, duration: 0.6 }}>
          <h2>Explore My Portfolio</h2>
          <div className="nav-cards">
            <Link to="/about" className="nav-card">
              <div className="nav-card-icon">📖</div>
              <h3>About Me</h3>
              <p>Learn about my background and interests</p>
            </Link>
            
            <Link to="/skills" className="nav-card">
              <div className="nav-card-icon">🛠️</div>
              <h3>Technical Skills</h3>
              <p>Technologies I work with</p>
            </Link>
            
            <Link to="/experience" className="nav-card">
              <div className="nav-card-icon">💼</div>
              <h3>Experience</h3>
              <p>Professional work history</p>
            </Link>
            
            <Link to="/projects" className="nav-card">
              <div className="nav-card-icon">🚀</div>
              <h3>Projects</h3>
              <p>Web, mobile, and game development</p>
            </Link>
            
            <Link to="/education" className="nav-card">
              <div className="nav-card-icon">🎓</div>
              <h3>Education</h3>
              <p>Academic background</p>
            </Link>
            
            <Link to="/contact" className="nav-card">
              <div className="nav-card-icon">📬</div>
              <h3>Contact</h3>
              <p>Let's connect and collaborate</p>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;