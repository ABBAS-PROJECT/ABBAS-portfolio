// ============================================
// DEVELOPERCONSOLE.JSX - DEVELOPER CONSOLE
// ============================================
// Terminal-style console activated with ~ key
// Type commands like "help", "achievements", etc.
// ============================================

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './DeveloperConsole.scss';

function DeveloperConsole({ onClose, achievements, currentTheme, onThemeChange }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: '🎮 Developer Console Activated' },
    { type: 'system', text: 'Type "help" for available commands' }
  ]);
  const inputRef = useRef(null);
  const historyRef = useRef(null);
  
  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  
  // Auto-scroll to bottom
  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);
  
  // ============================================
  // COMMAND HANDLERS
  // ============================================
  
  const commands = {
    help: () => [
      'Available commands:',
      '  help          - Show this message',
      '  achievements  - Show unlocked achievements',
      '  themes        - Show available themes',
      '  about         - About this portfolio',
      '  clear         - Clear console',
      '  exit          - Close console'
    ],
    
    achievements: () => {
      const unlocked = achievements || [];
      return [
        `Achievements: ${unlocked.length}/8 unlocked`,
        ...unlocked.map(id => `  ✓ ${id}`)
      ];
    },
    
    themes: () => [
      'Available themes:',
      `  light  ${currentTheme === 'light' ? '(active)' : ''}`,
      `  dark   ${currentTheme === 'dark' ? '(active)' : ''}`,
      `  retro  ${currentTheme === 'retro' ? '(active)' : ''}`,
      '',
      'Type theme name to switch (e.g., "dark")'
    ],
    
    light: () => {
      onThemeChange('light');
      return ['Switched to light theme'];
    },
    
    dark: () => {
      onThemeChange('dark');
      return ['Switched to dark theme'];
    },
    
    retro: () => {
      onThemeChange('retro');
      return ['Switched to retro theme - Welcome to the 80s!'];
    },
    
    about: () => [
      'Mohammed Abbas - Portfolio',
      'Built with React + Framer Motion',
      '',
      'Features:',
      '  • MixBot NPC Guide',
      '  • 3 Theme Modes',
      '  • Pac-Man Transitions',
      '  • Achievement System',
      '  • Snake Easter Egg',
      '',
      'GitHub: github.com/ABBAS-PROJECT'
    ],
    
    clear: () => 'CLEAR',
    
    exit: () => {
      onClose();
      return [];
    }
  };
  
  // ============================================
  // HANDLE COMMAND INPUT
  // ============================================
  const handleCommand = (e) => {
    e.preventDefault();
    
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;
    
    // Add input to history
    const newHistory = [...history, { type: 'input', text: `> ${input}` }];
    
    // Execute command
    if (commands[cmd]) {
      const output = commands[cmd]();
      
      if (output === 'CLEAR') {
        setHistory([
          { type: 'system', text: '🎮 Developer Console' },
          { type: 'system', text: 'Type "help" for commands' }
        ]);
      } else if (output.length > 0) {
        output.forEach(line => {
          newHistory.push({ type: 'output', text: line });
        });
        setHistory(newHistory);
      }
    } else {
      newHistory.push({ 
        type: 'error', 
        text: `Command not found: ${cmd}. Type "help" for available commands.` 
      });
      setHistory(newHistory);
    }
    
    // Clear input
    setInput('');
  };

  return (
    <motion.div
      className="developer-console"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
    >
      <div className="console-header">
        <span>🎮 Developer Console</span>
        <button onClick={onClose} className="console-close">✕</button>
      </div>
      
      <div className="console-body" ref={historyRef}>
        {history.map((entry, index) => (
          <div key={index} className={`console-line ${entry.type}`}>
            {entry.text}
          </div>
        ))}
      </div>
      
      <form className="console-input" onSubmit={handleCommand}>
        <span className="prompt">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a command..."
          autoComplete="off"
        />
      </form>
    </motion.div>
  );
}

export default DeveloperConsole;
