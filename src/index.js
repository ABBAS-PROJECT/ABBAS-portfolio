// ============================================
// INDEX.JS - REACT ENTRY POINT
// ============================================
// This is where React starts!
// It renders the App component into the HTML
// ============================================

import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import App from './App';

// ============================================
// CREATE ROOT AND RENDER APP
// ============================================
// React 18+ uses createRoot instead of render
// This finds the div with id="root" in index.html
// and renders our App component there
// ============================================

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // StrictMode helps find bugs in development
  // It doesn't affect production build
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
