import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const globalStyles = `
  :root {
    font-size: 62.5%;
  }
  *{
    margin: 0;
    padding: 0;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <style>{globalStyles}</style>
    <App/>
  </React.StrictMode>
);