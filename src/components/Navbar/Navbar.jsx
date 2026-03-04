import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaBriefcase, FaRocket, FaGraduationCap, FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import './Navbar.scss';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const navItems = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/about', label: 'About', icon: <FaUser /> },
    { path: '/skills', label: 'Skills', icon: <FaCode /> },
    { path: '/experience', label: 'Experience', icon: <FaBriefcase /> },
    { path: '/projects', label: 'Projects', icon: <FaRocket /> },
    { path: '/education', label: 'Education', icon: <FaGraduationCap /> },
    { path: '/contact', label: 'Contact', icon: <FaEnvelope /> }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {location.pathname !== '/' && (
          <motion.button
            className="back-btn"
            onClick={() => navigate(-1)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <FaArrowLeft />
            <span>Back</span>
          </motion.button>
        )}
        
        <div className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;