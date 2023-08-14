import React, { useState, useEffect, useRef } from "react";
import theme from "../theme";
import interact from "interactjs";

function ViewPort() {
  // State variables for managing zoom level and viewport position
  const [zoom, setZoom] = useState(1); // Current zoom level
  const [x, setX] = useState(0); // Horizontal viewport position
  const [y, setY] = useState(0); // Vertical viewport position

  // Refs for accessing DOM elements
  const ViewporWrappertRef = useRef(null); // Ref to the viewport wrapper
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

        // c(x/y) - cursor position: calculates the current cursor position from the viewportWrapper
        // c(x/y) is independent of scale. cx will always return the actual pixel distance
        const cx = event.clientX - Viewport.offsetLeft;
        const cy = event.clientY - Viewport.offsetTop;

        // v(x/y) - viewport position: calculates the current viewport position from the viewportWrapper
        // v(x/y) is independent of scale. vx will always return the actual pixel distance
        const vx = Viewport.getBoundingClientRect().left - Viewport.offsetLeft;
        const vy = Viewport.getBoundingClientRect().top - Viewport.offsetTop;

        // calculates the translation required after performing scaling
        const dx = - Math.ceil(zoomChange) * ((vx + (cx * newZoom)) - cx) / newZoom;
        const dy = - Math.ceil(zoomChange) * ((vy + (cy * newZoom)) - cy) / newZoom;

        // Calculate new x and y positions for the viewport
        const x = (parseFloat(Viewport.getAttribute('data-x')) || 0) + dx;
        const y = (parseFloat(Viewport.getAttribute('data-y')) || 0) + dy;

        // Update attributes for dragging and set state variables
        Viewport.setAttribute('data-x', x);
        Viewport.setAttribute('data-y', y);
     
        setZoom(newZoom);
        setX(x);
        setY(y);
      }
    };

    // Attach the mousewheel event listener to the viewport wrapper
    const ViewportWrapper = ViewporWrappertRef.current;
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
    interact(ViewporWrappertRef.current).draggable({
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
    <div ref={ViewporWrappertRef} style={styles.wrapper}>
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
