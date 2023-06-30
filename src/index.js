import React from 'react';
import ReactDOM from 'react-dom/client';
import Node from './Components/Node';
import Path from './Components/Path';
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Node label="A" xPos="15" yPos="15"/>
    <Node label="B" xPos="250" yPos="150"/>
    <Node label="C" xPos="100" yPos="250"/>
    <Path x1="15" y1="15" x2="250" y2="150"/>
    <Path x1="100" y1="250" x2="250" y2="150"/>
    <Path x1="100" y1="250" x2="15" y2="15"/>
  </React.StrictMode>
);

