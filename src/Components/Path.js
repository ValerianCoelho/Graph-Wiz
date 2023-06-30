import React, { useRef, useEffect } from 'react';
import './Path.css'
import interact from 'interactjs';

export default function Path({x1, y1, x2, y2}) {
  return (
    <>
      <svg className="path" xmlns="http://www.w3.org/2000/svg" width="500" height="500"> {/* Later change the width and height to fit the whole screen */}
        <path d={`M ${x1} ${y1} L ${x2} ${y2}`} stroke="black" stroke-width="2px" fill="none"/>
      </svg>
    </>
  );
}