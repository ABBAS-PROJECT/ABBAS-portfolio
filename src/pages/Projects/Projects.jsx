// ============================================
// PROJECTS.JSX - PROJECTS PAGE
// ============================================
// Showcase of your 3 main projects
// ============================================

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaDownload } from 'react-icons/fa';
import './Projects.scss';

function Projects() {
  // ============================================
  // PROJECTS DATA
  // ============================================
  // Your 3 main projects from CV
  // ============================================
  
  const projects = [
    {
      title: "StudyBuddy - Mobile Study Tracker",
      description: "Cross-platform mobile application using .NET MAUI 9 enabling students to track study sessions with real-time timer functionality and cloud data persistence.",
      longDescription: [
        "Implemented Firebase Realtime Database integration with complete CRUD operations for goal management across Android, iOS, macOS, and Windows platforms",
        "Built real-time stopwatch feature with async threading, cancellation tokens, and 100ms UI refresh rate for accurate time tracking",
        "Created multi-page navigation system using MAUI Shell architecture with FlyOut menu structure",
        "Applied async/await programming patterns for non-blocking database operations and responsive user interface"
      ],
      technologies: [".NET MAUI 9", "C#", "Firebase", "XAML", "Async/Await", "CRUD", "Cross-platform"],
      github: "https://github.com/ABBAS-PROJECT/StudyBuddy",
      download: "https://github.com/ABBAS-PROJECT/StudyBuddy/releases",
      icon: "📱",
      color: "#6366F1"
    },
    {
      title: "Uniten Peer Rating Platform",
      description: "Django-based peer rating platform enabling students to evaluate event organizers through a structured feedback system with role-based access control.",
      longDescription: [
        "Implemented comprehensive event management system supporting event creation, organizer assignment, participant registration with capacity limits, and automatic status tracking",
        "Built gamification features including a points system (2 pts for participation, 3 pts for organizing), 6-level progression system, and achievement badges across three categories",
        "Created rating and review system allowing students to rate organizers (1-5 stars) with comments and threaded replies, displaying average ratings and feedback analytics",
        "Designed normalized database schema using Django ORM with 8+ interconnected models managing users, profiles, events, organizers, participants, ratings, badges, and point history"
      ],
      technologies: ["Django", "Python", "SQLite", "Bootstrap", "JavaScript", "Django ORM", "MVC"],
      github: "https://github.com/ABBAS-PROJECT/Uniten-Peer-Rating-Platform",
      icon: "🎓",
      color: "#10B981"
    },
    {
      title: "Chess Game",
      description: "Developing a chess game in Unity using C# with object-oriented design principles and game state management.",
      longDescription: [
        "Implementing complete chess ruleset including special moves (castling, en passant, promotion) and win condition detection",
        "Building interactive game board with drag-and-drop piece movement and visual feedback for valid moves",
        "Applying OOP principles for piece hierarchy, move validation, and game state management"
      ],
      technologies: ["Unity", "C#", "OOP", "Game Development"],
      icon: "♟️",
      color: "#F59E0B",
      status: "In Development"
    }
  ];

  return (
    <motion.div 
      className="projects"
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
          Projects
        </motion.h1>
        
        <motion.p
          className="projects-intro"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Web applications, mobile apps, and games built with modern technologies
        </motion.p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 + (index * 0.2), duration: 0.6 }}
            >
              <div className="project-header" style={{ borderLeftColor: project.color }}>
                <div className="project-icon" style={{ color: project.color }}>
                  {project.icon}
                </div>
                <div>
                  <h2>{project.title}</h2>
                  {project.status && (
                    <span className="project-status">{project.status}</span>
                  )}
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <ul className="project-features">
                {project.longDescription.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              
              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub /> View Code
                  </a>
                )}
                {project.download && (
                  <a 
                    href={project.download} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link primary"
                  >
                    <FaDownload /> Download APK
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="projects-note"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <p>
            💡 All projects are available on my{' '}
            <a href="https://github.com/ABBAS-PROJECT" target="_blank" rel="noopener noreferrer">
              GitHub profile
            </a>
            . Feel free to explore the code and provide feedback!
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Projects;
