import React, { useState, useEffect, useRef } from "react";
import theme from "../theme";
import interact from "interactjs";

function ViewPort() {
  // State variables for managing zoom level and viewport position
  const [zoom, setZoom] = useState(1); // Current zoom level
  const [x, setX] = useState(0); // Horizontal viewport position
  const [y, setY] = useState(0); // Vertical viewport position

  // Refs for accessing DOM elements
  const ViewportWrappertRef = useRef(null); // Ref to the viewport wrapper
  const ViewportRef = useRef(null); // Ref to the actual viewport content

  // Styles for the components
  const styles = {
    wrapper: {
      backgroundColor: "#05050F",
      overflow: 'hidden'
    },
    viewport: {
      width: '100%',
      height: '100%',
      backgroundColor: theme.background,
      transform: `scale(${zoom}) translate(${x}px, ${y}px)` // Apply zoom and translation
    }
  };

  // Effect for handling mousewheel events for zooming
  useEffect(() => {
    const handleMousewheel = (event) => {
      event.preventDefault();
      const zoomFactor = 0.1;

      // Determine the new zoom level based on the mousewheel delta (+ve or -ve direction)
      const zoomChange = event.deltaY > 0 ? -zoomFactor : zoomFactor;
      const newZoom = zoom + zoomChange;

      const minZoom = 0.5;
      const maxZoom = 3;

      // Check if the new zoom level is within limits
      if (newZoom >= minZoom && newZoom <= maxZoom) {
        const Viewport = ViewportRef.current;
        const ViewportWrapper = ViewportWrappertRef.current;

        const px = event.clientX - Viewport.offsetLeft;
        const py = event.clientY - Viewport.offsetTop;

        const spx = px * newZoom;
        const spy = py * newZoom;

        const vx = (ViewportWrapper.clientWidth - ViewportWrapper.clientWidth * newZoom) / 2;
        const vy = (ViewportWrapper.clientHeight - ViewportWrapper.clientHeight * newZoom) / 2;

        console.log(vx, vy);

        const dx = - Math.ceil(zoomFactor) * ((vx + spx) - px);
        const dy = - Math.ceil(zoomFactor) * ((vy + spy) - py);

        console.log(Viewport.getAttribute('data-x'), Viewport.getAttribute('data-y'));
        console.log('px, py, spx, spy, vx, vy, dx, dy');
        console.log(px, py, spx, spy, vx, vy, dx, dy);

        const x = (parseFloat(Viewport.getAttribute('data-x')) || 0) + dx;
        const y = (parseFloat(Viewport.getAttribute('data-y')) || 0) + dy;

        Viewport.setAttribute('data-x', x);
        Viewport.setAttribute('data-y', y);
     
        setZoom(newZoom);
        setX(x);
        setY(y);
      }
    };

    // Attach the mousewheel event listener to the viewport wrapper
    const ViewportWrapper = ViewportWrappertRef.current;
    if (ViewportWrapper) {
      ViewportWrapper.addEventListener("mousewheel", handleMousewheel, { passive: false });
    }

    // Detach the event listener when the component is unmounted or when zoom changes
    return () => {
      if (ViewportWrapper) {
        ViewportWrapper.removeEventListener("mousewheel", handleMousewheel);
      }
    };
  }, [zoom]); // Effect depends on the 'zoom' state

  // Effect for enabling dragging using interact.js
  useEffect(()=> {
    interact(ViewportWrappertRef.current).draggable({
      listeners: {
        move: (event)=> {
          const target = event.target.children[0]; 

          // Calculate new x and y positions for the viewport during dragging
          const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx / zoom;
          const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy / zoom;

          // Update attributes for dragging and set state variables
          target.setAttribute('data-x', x);
          target.setAttribute('data-y', y);
          setX(x);
          setY(y);
        }
      }
    })
  }, [zoom]); // Effect depends on the 'zoom' state

  // Render the viewport component
  return (
    <div ref={ViewportWrappertRef} style={styles.wrapper}>
      <div ref={ViewportRef} style={styles.viewport}>
        Now is the winter of our discontent
        Made glorious summer by this sun of York;
        And all the clouds that lour'd upon our house
        In the deep bosom of the ocean buried.
        Now are our brows bound with victorious wreaths;
        Our bruised arms hung up for monuments;
        Our stern alarums changed to merry meetings,
        Our dreadful marches to delightful measures.
        Grim-visaged war hath smooth'd his wrinkled front;
        And now, instead of mounting barded steeds
        To fright the souls of fearful adversaries,
        He capers nimbly in a lady's chamber
        To the lascivious pleasing of a lute.
        But I, that am not shaped for sportive tricks,
        Nor made to court an amorous looking-glass;
        I, that am rudely stamp'd, and want love's majesty
        To strut before a wanton ambling nymph;
      </div>
    </div>
  );
}

export default ViewPort;
