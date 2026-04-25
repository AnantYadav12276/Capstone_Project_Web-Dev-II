import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';            // Looking in same folder (src)
import './styles/index.css';            // Looking in src/styles/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)