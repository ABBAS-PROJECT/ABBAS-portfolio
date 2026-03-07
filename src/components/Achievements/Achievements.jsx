import React, { useState, useEffect, useRef } from 'react';
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
  const location = useLocation();
  
  // Use refs to prevent re-render loops
  const visitedPagesRef = useRef(new Set());
  const startTimeRef = useRef(Date.now());
  const pageViewTimesRef = useRef({});
  const enterTimeRef = useRef(null);
  const hasCheckedFirstVisit = useRef(false);
  const hasCheckedNightOwl = useRef(false);

  // Unlock first visit once
  useEffect(() => {
    if (!hasCheckedFirstVisit.current && onAchievementUnlock) {
      hasCheckedFirstVisit.current = true;
      onAchievementUnlock('first-visit');
    }
  }, [onAchievementUnlock]);

  // Check night owl once
  useEffect(() => {
    if (!hasCheckedNightOwl.current && onAchievementUnlock) {
      hasCheckedNightOwl.current = true;
      const hour = new Date().getHours();
      if (hour >= 20 || hour < 6) {
        onAchievementUnlock('night-owl');
      }
    }
  }, [onAchievementUnlock]);

  // Track page visits
  useEffect(() => {
    const currentPath = location.pathname;
    
    // Record entry time
    enterTimeRef.current = Date.now();
    
    // Add to visited pages
    visitedPagesRef.current.add(currentPath);
    
    const allPages = ['/', '/about', '/skills', '/experience', '/projects', '/education', '/contact'];
    
    // Check if visited all pages
    const visitedAll = allPages.every(page => visitedPagesRef.current.has(page));
    
    if (visitedAll && onAchievementUnlock) {
      // Unlock Explorer
      onAchievementUnlock('explorer');
      
      // Check Speed Runner (visited all in under 60 seconds)
      const totalTime = Date.now() - startTimeRef.current;
      if (totalTime < 60000) {
        onAchievementUnlock('speed-runner');
      }
    }

    // Cleanup: Track time spent when leaving page
    return () => {
      if (enterTimeRef.current && onAchievementUnlock) {
        const timeSpent = Date.now() - enterTimeRef.current;
        pageViewTimesRef.current[currentPath] = (pageViewTimesRef.current[currentPath] || 0) + timeSpent;
        
        // Check Full Stack (spent 2+ seconds on each page)
        const viewedAllProperly = allPages.every(page => {
          const time = pageViewTimesRef.current[page] || 0;
          return time >= 2000; // 2 seconds minimum
        });
        
        if (viewedAllProperly) {
          onAchievementUnlock('full-stack');
        }
      }
    };
  }, [location.pathname, onAchievementUnlock]);

  const unlockedCount = achievements?.length || 0;
  const totalCount = ACHIEVEMENTS.length;

  return (
    <div className="achievements-container">
      <motion.div
        className="achievements-icon"
        onClick={() => setExpanded(!expanded)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="View Achievements"
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
              <button className="close-btn" onClick={() => setExpanded(false)} aria-label="Close">✕</button>
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