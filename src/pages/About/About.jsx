import React from 'react';
import { motion } from 'framer-motion';
import './About.scss';

function About() {
  return (
    <motion.div 
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>
          About Me
        </motion.h1>
        
        <div className="about-content">
          <motion.div className="about-text" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}>
            <h2>Software Engineer & Full Stack Developer</h2>
            <p>
              Software engineer with experience building web applications using Django and React. 
              Developed a peer rating platform and a cross-platform mobile app with .NET MAUI. 
              Completed internship at Smart Link working with Laravel and MySQL on enterprise ticketing systems.
            </p>
            
            <p>
              Strong foundation in Python, JavaScript, and C# with hands-on experience in full-stack 
              development. Comfortable with Git workflows, REST APIs, and responsive design. 
              Currently exploring game development with Unity while building production-ready web 
              and mobile applications.
            </p>
            
            <p>
              Graduated from Universiti Tenaga Nasional (UNITEN) with a Bachelor of Computer Science 
              in Software Engineering. Coursework included Software Engineering, Database Systems, 
              Web Development, Mobile Application Development, and Object-Oriented Programming.
            </p>
            
            <h3>What Drives Me</h3>
            <p>
              Video games taught me problem-solving and systems thinking. I apply these principles 
              to web development—building applications that combine technical functionality with 
              intuitive user experience. From web platforms to mobile apps to games, I explore 
              different technologies and create solutions that work well.
            </p>
            
            <h3>Beyond Code</h3>
            <p>
              When not coding, I play video games, explore new programming languages, 
              and tinker with side projects. I believe in learning by building—every project teaches 
              something new about architecture, optimization, or user experience.
            </p>
          </motion.div>
          
          <motion.div className="about-highlights" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }}>
            <div className="highlight-card">
              <div className="highlight-icon">🎓</div>
              <h4>Education</h4>
              <p>Bachelor of Computer Science</p>
              <p className="highlight-detail">UNITEN, Malaysia (2025)</p>
            </div>
            
            <div className="highlight-card">
              <div className="highlight-icon">💼</div>
              <h4>Experience</h4>
              <p>Software Development Intern</p>
              <p className="highlight-detail">Smart Link (2024)</p>
            </div>
            
            <div className="highlight-card">
              <div className="highlight-icon">📍</div>
              <h4>Location</h4>
              <p>Riyadh, Saudi Arabia</p>
              <p className="highlight-detail">Open to opportunities</p>
            </div>
            
            <div className="highlight-card">
              <div className="highlight-icon">🎮</div>
              <h4>Interests</h4>
              <p>Gaming, Web Dev, Mobile Apps</p>
              <p className="highlight-detail">Always learning</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;