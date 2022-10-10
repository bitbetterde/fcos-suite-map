import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import SwrWrapper from './components/SwrWrapper';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <SwrWrapper>
      <Router>
        <App />
      </Router>
    </SwrWrapper>
  </React.StrictMode>,
  document.getElementById('root'),
);
