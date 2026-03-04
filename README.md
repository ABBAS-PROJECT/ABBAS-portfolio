# Mohammed Abbas - Software Engineer Portfolio

Welcome to my portfolio! This interactive web application showcases my software engineering projects, skills, and experience with a unique gaming-inspired design. Check it out live [here!](https://your-portfolio.netlify.app)

![Portfolio Screenshot](screenshot.png)
<!-- Add screenshot after deployment -->

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Easter Eggs](#easter-eggs)
- [License](#license)

## Introduction

This portfolio is a personalized space highlighting my expertise in full-stack development, mobile apps, and game development. The application offers an interactive experience with gaming elements, making it memorable for recruiters and fellow developers.

Built with modern web technologies and designed with a 90% professional, 10% gaming aesthetic.

## Features

- **Responsive Design:** Optimized for all devices and screen sizes
- **Three Theme Modes:** Light, Dark (Purple), and Retro (Cyan) themes with smooth transitions
- **Interactive Elements:** 
  - 🎮 Pac-Man page transitions
  - 🐍 Snake easter egg animation
  - 🎯 404 runner game
  - 🤖 MixBot AI guide
- **Achievement System:** Track visitor exploration with 8 unlockable achievements
- **Developer Console:** Terminal-style interface (press `~` key)
- **Project Showcase:** Detailed project pages with live demos and source code links
- **Contact Integration:** Easy-to-use contact methods with clipboard copy functionality

## Installation

To run this portfolio locally, follow these steps:

To run this portfolio locally, follow these steps:

1. Clone the repository:
```bash
   git clone https://github.com/ABBAS-PROJECT/ABBAS-portfolio.git
```

2. Navigate to the project directory:
```bash
   cd ABBAS-portfolio
```

3. Install dependencies:
```bash
   npm install
```

4. Start the development server:
```bash
   npm start
```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000)

## Technologies Used

- **React 18.2.0** - JavaScript library for building user interfaces
- **React Router 6.20.0** - Client-side routing
- **Framer Motion 10.16.16** - Animation library
- **SASS 1.69.5** - CSS preprocessor for enhanced styling
- **React Icons 4.12.0** - Icon library

## Project Structure

The project follows a standard React application layout:
```
mohammed-portfolio/
├── public/
│   ├── _redirects          # Netlify routing configuration
│   ├── favicon.ico         # Site favicon
│   └── index.html          # HTML template
├── src/
│   ├── components/
│   │   ├── Achievements/   # Achievement tracker system
│   │   ├── DeveloperConsole/ # Terminal interface
│   │   ├── MixBot/         # AI guide assistant
│   │   ├── Navbar/         # Navigation bar
│   │   ├── PacManTransition/ # Page transitions
│   │   ├── Snake/          # Easter egg animation
│   │   └── ThemeSwitcher/  # Theme toggle
│   ├── pages/
│   │   ├── Home/           # Landing page
│   │   ├── About/          # About me
│   │   ├── Skills/         # Technical skills
│   │   ├── Experience/     # Work history
│   │   ├── Projects/       # Project showcase
│   │   ├── Education/      # Academic background
│   │   ├── Contact/        # Contact information
│   │   └── NotFound/       # 404 game page
│   ├── styles/
│   │   └── global.scss     # Global styles and themes
│   ├── App.jsx             # Main application component
│   ├── App.scss            # App-specific styles
│   └── index.js            # Application entry point
└── package.json            # Project dependencies
```

## Easter Eggs

Try these hidden features in the portfolio:

- 🎮 **Pac-Man Transitions** - Watch the classic arcade animation between pages
- 🐍 **Snake Animation** - Wait 30 seconds on any page
- 👾 **Retro Theme** - Switch to retro mode for 8-bit aesthetics
- ⌨️ **Developer Console** - Press `~` key to access terminal
- 🏆 **Achievements** - Explore all pages to unlock 8 achievements
- 🕹️ **404 Game** - Visit a non-existent page to play the runner game
- 🤖 **MixBot** - Click the assistant for contextual help on each page

## Deployment

This portfolio is deployed on Netlify. To deploy your own version:

1. Build the project:
```bash
   npm run build
```

2. Deploy to Netlify:
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `build`

**Note:** The `public/_redirects` file is required for React Router to work correctly on Netlify.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Copyright © 2025 Mohammed Abbas**

---

Thank you for checking out my portfolio! If you have any questions, feedback, or opportunities, feel free to reach out. ⭐
