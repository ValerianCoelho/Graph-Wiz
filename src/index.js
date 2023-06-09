import React from 'react';
import ReactDOM from 'react-dom/client';
import Node from './Components/Node';
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Node label="A"/>
    <Node label="B"/>
    <Node label="C"/>
  </React.StrictMode>
);