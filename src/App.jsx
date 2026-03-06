import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.scss';

// Components (loaded immediately - needed for every page)
import Navbar from './components/Navbar/Navbar';
import MixBot from './components/MixBot/MixBot';
import PacManTransition from './components/PacManTransition/PacManTransition';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import Snake from './components/Snake/Snake';
import Achievements from './components/Achievements/Achievements';
import DeveloperConsole from './components/DeveloperConsole/DeveloperConsole';
import RetroScanline from './components/RetroScanline/RetroScanline'; // NEW!

// Pages (lazy loaded for better performance)
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Skills = lazy(() => import('./pages/Skills/Skills'));
const Experience = lazy(() => import('./pages/Experience/Experience'));
const Projects = lazy(() => import('./pages/Projects/Projects'));
const Education = lazy(() => import('./pages/Education/Education'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

// Loading component (shown while pages load)
const PageLoader = () => (
  <div className="page-loader">
    <div className="loader-content">
      <div className="loader-spinner"></div>
      <p>Loading...</p>
    </div>
  </div>
);

function AnimatedRoutes({ unlockAchievement }) {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 1200);
    return () => clearTimeout(timer);
  }, [location.pathname]);
  
  return (
    <>
      <PacManTransition />
      {!isTransitioning && (
        <AnimatePresence mode="wait">
          <Suspense fallback={<PageLoader />}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/education" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      )}
    </>
  );
}

function App() {
  const [theme, setTheme] = useState('dark');
  const [consoleOpen, setConsoleOpen] = useState(false);
  const [achievements, setAchievements] = useState([]);

  // Memoized unlock function
  const unlockAchievement = useCallback((achievementId) => {
    setAchievements(prev => {
      if (!prev.includes(achievementId)) {
        const updated = [...prev, achievementId];
        localStorage.setItem('portfolio-achievements', JSON.stringify(updated));
        return updated;
      }
      return prev;
    });
  }, []);

  // Initialize theme and achievements
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    setTheme(savedTheme);
    
    const savedAchievements = JSON.parse(
      localStorage.getItem('portfolio-achievements')
    ) || [];
    setAchievements(savedAchievements);
  }, []);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Developer console keyboard shortcut
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.keyCode === 192) {
        setConsoleOpen(prev => !prev);
        unlockAchievement('console-master');
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [unlockAchievement]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    if (newTheme === 'retro') unlockAchievement('retro-mode');
  };

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Navbar />
        <div className="app-content">
          <AnimatedRoutes unlockAchievement={unlockAchievement} />
        </div>
        
        {/* RETRO SCANLINE - Only shows in retro mode */}
        {theme === 'retro' && <RetroScanline />}
        
        <ThemeSwitcher currentTheme={theme} onThemeChange={handleThemeChange} />
        <MixBot onAchievementUnlock={unlockAchievement} />
        <Snake />
        <Achievements achievements={achievements} onAchievementUnlock={unlockAchievement} />
        {consoleOpen && (
          <DeveloperConsole 
            onClose={() => setConsoleOpen(false)}
            achievements={achievements}
            currentTheme={theme}
            onThemeChange={handleThemeChange}
          />
        )}
      </div>
    </Router>
  );
}

export default App;