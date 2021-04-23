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

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
