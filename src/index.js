import React from 'react';
import ReactDOM from 'react-dom/client';
import Node from './Components/Node';
import Path from './Components/Path';
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Node label="A" xPos="0" yPos="0"/>
    <Node label="B" xPos="0" yPos="0"/>
    <Node label="C" xPos="0" yPos="0"/>
    <Path x1="100" y1="100" x2="100" y2="200"/>
  </React.StrictMode>
);

