import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './MixBot.scss';

const MIXBOT_DIALOGUES = {
  '/': {
    greeting: "SYSTEM_INITIALIZED",
    message: "Welcome. I am the Mix-bot i'll guide you through this portfolio. I recommend starting with 'About' to learn about Mohammed, then exploring his technical capabilities.",
    suggestedPages: [
      { path: '/about', label: 'START: About Me' },
      { path: '/projects', label: 'SKIP TO: Projects' }
    ]
  },
  '/about': {
    greeting: "USER_PROFILE_LOADED",
    message: "Mohammed is a Computer Science graduate from UNITEN with a strong foundation in software engineering. Next, check out his technical skills.",
    suggestedPages: [
      { path: '/skills', label: 'NEXT: Technical Skills' },
      { path: '/projects', label: 'SKIP TO: Projects' }
    ]
  },
  '/skills': {
    greeting: "ANALYZING_CORE_COMPETENCIES",
    message: "Mohammed specializes in React, Django, .NET MAUI, and Unity. Strong full-stack capabilities. See where he applied these professionally.",
    suggestedPages: [
      { path: '/experience', label: 'NEXT: Work Experience' },
      { path: '/projects', label: 'VIEW: Projects' }
    ]
  },
  '/experience': {
    greeting: "RETRIEVING_WORK_HISTORY",
    message: "Smart Link internship experience with Laravel and PHP. Clean, professional code is his priority. Now check out his projects.",
    suggestedPages: [
      { path: '/projects', label: 'NEXT: View Projects' },
      { path: '/education', label: 'VIEW: Education' }
    ]
  },
  '/projects': {
    greeting: "SCANNING_PROJECT_DATABASE",
    message: "These projects showcase production-ready code. StudyBuddy demonstrates cross-platform development with .NET MAUI. Check his education next.",
    suggestedPages: [
      { path: '/education', label: 'NEXT: Education' },
      { path: '/contact', label: 'SKIP TO: Contact' }
    ]
  },
  '/education': {
    greeting: "ACADEMIC_CREDENTIALS_VERIFIED",
    message: "Bachelor of Computer Science from UNITEN with comprehensive coursework in software engineering. Ready to connect?",
    suggestedPages: [
      { path: '/contact', label: 'NEXT: Get In Touch' },
      { path: '/', label: 'BACK: Home' }
    ]
  },
  '/contact': {
    greeting: "COMMUNICATION_CHANNEL_OPEN",
    message: "Ready to discuss a project? Mohammed is currently open to new opportunities. Use the contact options below or return to explore more.",
    suggestedPages: [
      { path: '/projects', label: 'REVIEW: Projects' },
      { path: '/', label: 'BACK: Home' }
    ]
  }
};

function MixBot({ onAchievementUnlock }) {
  const [isOpen, setIsOpen] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [hasInteracted, setHasInteracted] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const current = MIXBOT_DIALOGUES[location.pathname] || MIXBOT_DIALOGUES['/'];

  // Typing animation
  useEffect(() => {
    setDisplayText("");
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(current.message.slice(0, i));
      i++;
      if (i > current.message.length) clearInterval(timer);
    }, 15);
    return () => clearInterval(timer);
  }, [location.pathname, current.message]);

  const handleInteraction = () => {
    if (!hasInteracted && onAchievementUnlock) {
      setHasInteracted(true);
      onAchievementUnlock('mixbot-friend');
    }
  };

  const handleNavigation = (path) => {
    handleInteraction();
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div className="mixbot-guide-container">
      <AnimatePresence>
        {!isOpen ? (
          <motion.div 
            className="guide-trigger" 
            onClick={() => {
              setIsOpen(true);
              handleInteraction();
            }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="blink-dot" aria-hidden="true"></span>
            <span className="trigger-text">[ &gt;_ ] ASSISTANT_ACTIVE</span>
          </motion.div>
        ) : (
          <motion.div 
            className="guide-terminal" 
            initial={{ opacity: 0, y: 20, scale: 0.95 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
          >
            <div className="terminal-header">
              <div className="header-left">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="title">MOHAMMED_ABBAS_OS v1.0</span>
              </div>
              <button className="minimize-btn" onClick={() => setIsOpen(false)}>_</button>
            </div>
            
            <div className="terminal-content">
              <div className="prompt">{current.greeting}</div>
              <div className="main-text">
                {displayText}<span className="cursor">█</span>
              </div>
            </div>

            <div className="terminal-actions">
              {current.suggestedPages.map((page, index) => (
                <button 
                  key={index}
                  className={`nav-btn ${index === 0 ? 'primary-btn' : 'secondary-btn'}`}
                  onClick={() => handleNavigation(page.path)}
                >
                  {page.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MixBot;