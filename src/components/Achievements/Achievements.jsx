import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Achievements.scss';

const ACHIEVEMENTS = [
  { id: 'first-visit', name: 'First Visit', description: 'Welcome to the portfolio!', icon: '👋' },
  { id: 'explorer', name: 'Explorer', description: 'Visited all 7 pages', icon: '🗺️' },
  { id: 'mixbot-friend', name: 'MixBot Friend', description: 'Interacted with MixBot', icon: '🤖' },
  { id: 'console-master', name: 'Console Master', description: 'Opened developer console', icon: '⌨️' },
  { id: 'retro-mode', name: 'Retro Gamer', description: 'Switched to retro theme', icon: '👾' },
  { id: 'speed-runner', name: 'Speed Runner', description: 'Explored site in under 60 seconds', icon: '⚡' },
  { id: 'night-owl', name: 'Night Owl', description: 'Visited between 8pm-6am', icon: '🦉' },
  { id: 'full-stack', name: 'Full Stack', description: 'Viewed every section completely', icon: '📚' }
];

function Achievements({ achievements, onAchievementUnlock }) {
  const [expanded, setExpanded] = useState(false);
  const [visitedPages, setVisitedPages] = useState(new Set());
  const [startTime] = useState(Date.now());
  const [pageViewTimes, setPageViewTimes] = useState({});
  const location = useLocation();
  
  // FIXED: Unlock first-visit immediately on mount
  useEffect(() => {
    if (onAchievementUnlock) {
      onAchievementUnlock('first-visit');
    }
  }, []); // Run once on mount
  
  // Track page visits
  useEffect(() => {
    const newVisited = new Set(visitedPages);
    newVisited.add(location.pathname);
    setVisitedPages(newVisited);
    
    const enterTime = Date.now();
    
    const allPages = ['/', '/about', '/skills', '/experience', '/projects', '/education', '/contact'];
    const visitedAll = allPages.every(page => newVisited.has(page));
    
    if (visitedAll && onAchievementUnlock) {
      onAchievementUnlock('explorer');
      
      if ((Date.now() - startTime) < 60000) {
        onAchievementUnlock('speed-runner');
      }
      
      const viewedAllSections = allPages.every(page => pageViewTimes[page] && pageViewTimes[page] >= 2000);
      if (viewedAllSections) {
        onAchievementUnlock('full-stack');
      }
    }
    
    return () => {
      const timeSpent = Date.now() - enterTime;
      setPageViewTimes(prev => ({
        ...prev,
        [location.pathname]: (prev[location.pathname] || 0) + timeSpent
      }));
    };
  }, [location.pathname, onAchievementUnlock, visitedPages, startTime, pageViewTimes]);
  
  // Check night owl
  useEffect(() => {
    const hour = new Date().getHours();
    if ((hour >= 20 || hour < 6) && onAchievementUnlock) {
      onAchievementUnlock('night-owl');
    }
  }, [onAchievementUnlock]);

  const unlockedCount = achievements?.length || 0;
  const totalCount = ACHIEVEMENTS.length;

  return (
    <div className="achievements-container">
      <motion.div
        className="achievements-icon"
        onClick={() => setExpanded(!expanded)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="trophy">🏆</span>
        <span className="count">{unlockedCount}/{totalCount}</span>
      </motion.div>
      
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="achievements-panel"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
          >
            <div className="panel-header">
              <h3>Achievements</h3>
              <button className="close-btn" onClick={() => setExpanded(false)}>✕</button>
            </div>
            
            <div className="achievements-list">
              {ACHIEVEMENTS.map((achievement) => {
                const isUnlocked = achievements?.includes(achievement.id);
                return (
                  <div key={achievement.id} className={`achievement-item ${isUnlocked ? 'unlocked' : 'locked'}`}>
                    <span className="achievement-icon">{achievement.icon}</span>
                    <div className="achievement-info">
                      <h4>{achievement.name}</h4>
                      <p>{achievement.description}</p>
                    </div>
                    {isUnlocked && <span className="checkmark">✓</span>}
                  </div>
                );
              })}
            </div>
            
            <div className="panel-footer">
              <small>{unlockedCount} of {totalCount} unlocked</small>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Achievements;