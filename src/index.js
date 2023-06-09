import React from 'react';
import ReactDOM from 'react-dom/client';
import Node from './Components/Node';
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Node label="A" xPos="100" yPos="100"/>
    <Node label="B" xPos="100" yPos="200"/>
    <Node label="C" xPos="200" yPos="100"/>
  </React.StrictMode>
);

