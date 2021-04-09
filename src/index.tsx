import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SWRConfig } from 'swr';
import { request } from 'graphql-request';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher: (query: string) => request(import.meta.env.SNOWPACK_PUBLIC_API_URL, query) }}>
      <App />
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
