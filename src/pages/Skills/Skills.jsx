// ============================================
// SKILLS.JSX - SKILLS PAGE
// ============================================
// Technical skills with gaming-themed presentation
// ============================================

import React from 'react';
import { motion } from 'framer-motion';
import './Skills.scss';

function Skills() {
  // ============================================
  // SKILLS DATA
  // ============================================
  // Organized by category from your CV
  // ============================================
  
  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      skills: [
        { name: "Python", level: 90 },
        { name: "C#", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "PHP", level: 75 },
        { name: "SQL", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "C++", level: 70 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: "🛠️",
      skills: [
        { name: "Django", level: 90 },
        { name: ".NET MAUI", level: 85 },
        { name: "Laravel", level: 75 },
        { name: "React", level: 80 },
        { name: "Bootstrap", level: 85 }
      ]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: [
        { name: "Firebase", level: 85 },
        { name: "SQLite", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "SQL Server", level: 75 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: "🔧",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Visual Studio", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Unity", level: 70 }
      ]
    },
    {
      title: "Concepts",
      icon: "🧠",
      skills: [
        { name: "OOP", level: 90 },
        { name: "MVC Architecture", level: 85 },
        { name: "MVVM Pattern", level: 80 },
        { name: "Database Design", level: 85 },
        { name: "Async/Await", level: 85 },
        { name: "REST APIs", level: 80 },
        { name: "CRUD Operations", level: 90 }
      ]
    }
  ];

  return (
    <motion.div 
      className="skills"
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
          Technical Skills
        </motion.h1>
        
        <motion.p
          className="skills-intro"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Technologies and concepts I work with to build web applications, 
          mobile apps, and games.
        </motion.p>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 + (index * 0.1), duration: 0.6 }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h2>{category.title}</h2>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: 1 + (index * 0.1), duration: 1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="skills-note"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <p>
            💡 <strong>Always Learning:</strong> Currently exploring Docker, AWS deployment, 
            and TypeScript to expand my full-stack capabilities.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Skills;
