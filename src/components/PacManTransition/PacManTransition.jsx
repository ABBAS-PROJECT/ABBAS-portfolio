import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './PacManTransition.scss'  // CORRECT FILE!

function PacManTransition() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prevPath, setPrevPath] = useState('');
  const location = useLocation();
  
  useEffect(() => {
    if (prevPath && prevPath !== location.pathname) {
      setIsTransitioning(true);
      // The "Sweet Spot": 1.2 seconds total
      setTimeout(() => setIsTransitioning(false), 1200); 
    }
    setPrevPath(location.pathname);
  }, [location.pathname, prevPath]);
  
  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div 
          className="pacman-transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="crt-overlay"></div>
          
          <div className="content-wrapper">
            <h1 className="header-text">LOADING PAGE</h1>
            
            <div className="maze-row">
              <div className="dots-trail">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="dot"
                    animate={{ opacity: 0, scale: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.01 }}
                  />
                ))}
              </div>

              <motion.div
                className="actors-container"
                initial={{ x: '-25vw' }}
                animate={{ x: '125vw' }}
                transition={{ duration: 1.2, ease: "linear" }}
              >
                {/* FIXED: Forward-eating Pac-Man */}
                <div className="pacman">
                  <div className="mouth-top"></div>
                  <div className="mouth-bottom"></div>
                </div>
                
                <div className="ghost-group">
                  <div className="ghost blue"></div>
                  <div className="ghost blue"></div>
                </div>
              </motion.div>
            </div>
            
            <div className="footer-text">PORTFOLIO SITE: MOHAMMED ABBAS</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PacManTransition;
