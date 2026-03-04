import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './NotFound.scss';

function NotFound() {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [playerY, setPlayerY] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [obstacles, setObstacles] = useState([]);
  
  const gameLoopRef = useRef(null);
  const obstacleTimerRef = useRef(null);

  // Load high score
  useEffect(() => {
    const saved = localStorage.getItem('404-game-highscore');
    if (saved) setHighScore(parseInt(saved));
  }, []);

  // Jump function
  const jump = () => {
    if (!isJumping && !gameOver && gameStarted) {
      setIsJumping(true);
      setPlayerY(100);
      setTimeout(() => {
        setPlayerY(0);
        setIsJumping(false);
      }, 500);
    }
  };

  // Start game
  const startGame = () => {
    console.log('Game started!'); // DEBUG
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setObstacles([]);
    setPlayerY(0);
  };

  // Reset game
  const resetGame = () => {
    console.log('Game over! Score:', score); // DEBUG
    setGameOver(true);
    setGameStarted(false);
    setObstacles([]);
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('404-game-highscore', score.toString());
    }
  };

  // Game loop - COMPLETELY REWRITTEN
  useEffect(() => {
    if (!gameStarted || gameOver) {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
        gameLoopRef.current = null;
      }
      if (obstacleTimerRef.current) {
        clearInterval(obstacleTimerRef.current);
        obstacleTimerRef.current = null;
      }
      return;
    }

    console.log('Starting game loops...'); // DEBUG

    // Spawn obstacles every 2 seconds
    obstacleTimerRef.current = setInterval(() => {
      const newObstacle = {
        id: Date.now(),
        x: 100 // Start at right edge
      };
      console.log('Spawning obstacle:', newObstacle); // DEBUG
      setObstacles(prev => {
        const updated = [...prev, newObstacle];
        console.log('Total obstacles:', updated.length); // DEBUG
        return updated;
      });
    }, 2000);

    // Main game loop - runs every 30ms
    gameLoopRef.current = setInterval(() => {
      // Increase score
      setScore(prev => prev + 1);
      
      // Move obstacles and check collision
      setObstacles(prev => {
        const updated = prev
          .map(obs => ({
            ...obs,
            x: obs.x - 1.5 // Move left
          }))
          .filter(obs => obs.x > -10); // Remove off-screen obstacles
        
        // Check collision
        updated.forEach(obs => {
          // Player is at 10% from left, 40px wide
          // Obstacle is ~35px wide
          const playerLeft = 10;
          const playerRight = 14;
          const obstacleLeft = obs.x;
          const obstacleRight = obs.x + 6;
          
          const horizontalCollision = 
            obstacleRight > playerLeft && 
            obstacleLeft < playerRight;
          
          const verticalCollision = playerY < 50;
          
          if (horizontalCollision && verticalCollision) {
            console.log('COLLISION!'); // DEBUG
            resetGame();
          }
        });
        
        return updated;
      });
    }, 30);

    // Cleanup
    return () => {
      console.log('Cleaning up game loops...'); // DEBUG
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
      if (obstacleTimerRef.current) clearInterval(obstacleTimerRef.current);
    };
  }, [gameStarted, gameOver, playerY]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        if (!gameStarted) {
          startGame();
        } else {
          jump();
        }
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameStarted]);

  // DEBUG: Log obstacles
  useEffect(() => {
    if (obstacles.length > 0) {
      console.log('Current obstacles:', obstacles);
    }
  }, [obstacles]);

  return (
    <motion.div 
      className="not-found" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
    >
      <div className="container">
        <div className="not-found-content">
          {/* Glitchy 404 Title */}
          <h1 className="glitch-title" data-text="404">
            <span className="glitch-text">404</span>
          </h1>
          
          <p className="description">
            ERROR: SECTOR_NOT_FOUND. INITIALIZING EMERGENCY_RUN.EXE
          </p>

          {/* Game System */}
          <div className="mini-game-system">
            <div className="game-stats">
              <span>SCORE: {score}</span>
              <span>BEST: {highScore}</span>
              <span style={{color: '#666', fontSize: '0.6rem'}}>
                GHOSTS: {obstacles.length}
              </span>
            </div>

            <div 
              className="game-window" 
              onClick={() => !gameStarted ? startGame() : jump()}
            >
              {/* Scrolling Background */}
              <div className={`scrolling-bg ${gameStarted ? 'running' : ''}`}></div>

              {/* Start/Game Over Overlay */}
              {!gameStarted && (
                <div className="game-overlay">
                  <div className="status-text">
                    {gameOver ? 'SYSTEM_FAIL' : 'READY?'}
                  </div>
                  {score > 0 && gameOver && (
                    <div className="final-score">SCORE: {score}</div>
                  )}
                  {score === highScore && score > 0 && gameOver && (
                    <div className="new-record">🏆 NEW RECORD!</div>
                  )}
                  <button 
                    className="start-trigger" 
                    onClick={(e) => {
                      e.stopPropagation();
                      startGame();
                    }}
                  >
                    {gameOver ? 'RETRY' : 'START'}
                  </button>
                </div>
              )}

              {/* Player */}
              <div 
                className="player-character" 
                style={{ bottom: `${10 + playerY}px` }}
              >
                <div className="hero-body"></div>
              </div>

              {/* Obstacles - SIMPLIFIED FOR VISIBILITY */}
              {obstacles.map(obs => (
                <div 
                  key={obs.id} 
                  className="ghost-obstacle" 
                  style={{ left: `${obs.x}%` }}
                >
                  👻
                </div>
              ))}
              
              {/* Floor */}
              <div className="cyber-floor"></div>
            </div>

            <div className="game-hint">
              SPACE or TAP to jump • Avoid the ghosts!
            </div>
          </div>

          {/* Back to Home */}
          <Link to="/" className="back-home-link">
            ← RETURN_TO_BASE
          </Link>

          {/* Quick Links */}
          <div className="quick-nav">
            <Link to="/projects">PROJECTS</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default NotFound;