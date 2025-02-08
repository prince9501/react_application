import React from 'react';
import { createRoot } from 'react-dom/client'; // Use createRoot from react-dom/client
import App from './App';

// Find the root element in your HTML
const rootElement = document.getElementById('root');

// Create a root and render the app
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);