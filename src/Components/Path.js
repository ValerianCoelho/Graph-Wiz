import React, { useRef, useEffect } from 'react';
import interact from 'interactjs';

export default function Path({x1, y1, x2, y2}) {
  return (
    <>
      <svg>
        <path d={`M ${x1} ${y1} L ${x2} ${y2}`} stroke="black" stroke-width="2px" fill="none"/>
    </svg>
    </>
  );
}