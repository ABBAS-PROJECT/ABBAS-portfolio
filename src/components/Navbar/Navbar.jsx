import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaCode, FaBriefcase, FaProjectDiagram, FaGraduationCap, FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { IoGameController } from 'react-icons/io5';
import './Navbar.scss';

function Navbar({ currentTheme, onThemeChange }) {
  const location = useLocation();
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const isHome = location.pathname === '/';

  const navItems = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/about', label: 'About', icon: <FaUser /> },
    { path: '/skills', label: 'Skills', icon: <FaCode /> },
    { path: '/experience', label: 'Experience', icon: <FaBriefcase /> },
    { path: '/projects', label: 'Projects', icon: <FaProjectDiagram /> },
    { path: '/education', label: 'Education', icon: <FaGraduationCap /> },
    { path: '/contact', label: 'Contact', icon: <FaEnvelope /> },
  ];

  const themeIcons = {
    light: <MdLightMode />,
    dark: <MdDarkMode />,
    retro: <IoGameController />
  };

  const themeLabels = {
    light: 'Light',
    dark: 'Dark',
    retro: 'Retro'
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        {!isHome && (
          <Link to="/" className="back-btn">
            <FaArrowLeft />
            <span>Back</span>
          </Link>
        )}

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
          
          {/* THEME SWITCHER - ALWAYS VISIBLE IN ALL THEMES */}
          <li className="theme-item">
            <button 
              className={`theme-btn ${showThemeMenu ? 'active' : ''}`}
              onClick={() => setShowThemeMenu(!showThemeMenu)}
            >
              {themeIcons[currentTheme]}
              <span>{themeLabels[currentTheme]}</span>
            </button>
            
            {showThemeMenu && (
              <div className="theme-menu">
                <button 
                  className={currentTheme === 'light' ? 'active' : ''}
                  onClick={() => {
                    onThemeChange('light');
                    setShowThemeMenu(false);
                  }}
                >
                  <MdLightMode />
                  <span>Light</span>
                  {currentTheme === 'light' && <span>✓</span>}
                </button>
                <button 
                  className={currentTheme === 'dark' ? 'active' : ''}
                  onClick={() => {
                    onThemeChange('dark');
                    setShowThemeMenu(false);
                  }}
                >
                  <MdDarkMode />
                  <span>Dark</span>
                  {currentTheme === 'dark' && <span>✓</span>}
                </button>
                <button 
                  className={currentTheme === 'retro' ? 'active' : ''}
                  onClick={() => {
                    onThemeChange('retro');
                    setShowThemeMenu(false);
                  }}
                >
                  <IoGameController />
                  <span>Retro</span>
                  {currentTheme === 'retro' && <span>✓</span>}
                </button>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;