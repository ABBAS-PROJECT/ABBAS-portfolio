import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Snake.scss';

function Snake() {
  const [showSnake, setShowSnake] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  
  useEffect(() => {
    // Only show once per session
    if (hasShown) return;
    
    // Show after 30 seconds
    const timer = setTimeout(() => {
      setShowSnake(true);
      setHasShown(true);
      
      // Hide after 8 seconds
      setTimeout(() => {
        setShowSnake(false);
      }, 8000);
    }, 30000);
    
    return () => clearTimeout(timer);
  }, [hasShown]);

  return (
    <AnimatePresence>
      {showSnake && (
        <motion.div 
          className="nokia-snake-container"
          initial={{ x: '-100vw' }}
          animate={{ x: '100vw' }}
          transition={{ duration: 8, ease: "linear" }}
          exit={{ opacity: 0 }}
        >
          <div className="nokia-lcd">
            <div className="snake-body">
              <div className="segment head">
                <div className="eye top"></div>
                <div className="eye bottom"></div>
              </div>
              {[...Array(7)].map((_, i) => (
                <div key={i} className="segment body-part"></div>
              ))}
            </div>
            <div className="nokia-food"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Snake;