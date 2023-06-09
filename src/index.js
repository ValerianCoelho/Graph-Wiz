import React from 'react';
import ReactDOM from 'react-dom/client';
import Node from './Components/Node';
import Path from './Components/Path';
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Node label="A" xPos="100" yPos="100"/>
    <Node label="B" xPos="100" yPos="200"/>
    <Node label="C" xPos="200" yPos="100"/>
    <Path x1="10" y1="10" x2="200" y2="200"/>
  </React.StrictMode>
);

