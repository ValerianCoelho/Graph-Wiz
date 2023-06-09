import React, { useRef, useEffect } from 'react';
import interact from 'interactjs';
import './Node.css'

export default function Node({label, ref}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    const position = { x: 0, y: 0 }

    interact(element).draggable({
        listeners: {
          start (event) {
            console.log(event.type, event.target)
          },
          move (event) {
            position.x += event.dx
            position.y += event.dy
      
            event.target.style.transform =
              `translate(${position.x}px, ${position.y}px)`
          },
        }
      })
  }, [])
  
  return (
    <>
      <div className="node" ref={elementRef}>
        <div className="text">{label}</div>
      </div>
    </>
  );
}
