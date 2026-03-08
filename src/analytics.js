import ReactGA from 'react-ga4';

// Replace 'G-XXXXXXXXXX' with your actual Google Analytics Measurement ID
// Get it from: https://analytics.google.com
export const initGA = () => {
  ReactGA.initialize('G-Q76JCWY87B'); // REPLACE THIS!
};

export const logPageView = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

export const logEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};