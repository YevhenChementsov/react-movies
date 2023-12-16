import React from 'react';

import App from 'components/App/App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import 'modern-normalize/modern-normalize.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/react-movies">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
