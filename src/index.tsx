import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import './index.css';

const container = document.getElementById('app');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);
