import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaGamepad } from 'react-icons/fa';
import './ThemeSwitcher.scss';

function ThemeSwitcher({ currentTheme, onThemeChange }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const themes = [
    { id: 'light', icon: <FaSun />, label: 'Light' },
    { id: 'dark', icon: <FaMoon />, label: 'Dark' },
    { id: 'retro', icon: <FaGamepad />, label: 'Retro' }
  ];

  const currentThemeData = themes.find(t => t.id === currentTheme);

  return (
    <div className="theme-switcher">
      <motion.button 
        className="theme-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {currentThemeData?.icon}
        <span className="theme-label">{currentThemeData?.label}</span>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="theme-dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {themes.map((theme) => (
              <button
                key={theme.id}
                className={`theme-option ${currentTheme === theme.id ? 'active' : ''}`}
                onClick={() => {
                  onThemeChange(theme.id);
                  setIsOpen(false);
                }}
              >
                <span className="theme-icon">{theme.icon}</span>
                <span className="theme-name">{theme.label}</span>
                {currentTheme === theme.id && <span className="checkmark">✓</span>}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ThemeSwitcher;