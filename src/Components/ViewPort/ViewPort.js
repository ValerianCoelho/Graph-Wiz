import React, { useState, useEffect, useRef } from "react";
import theme from "../theme";
import interact from "interactjs";

function ViewPort() {
  const [zoom, setZoom] = useState(1);
  const ViewportRef = useRef(null);

  const styles = {
    wrapper: {
      backgroundColor: "#05050F",
      overflow: 'hidden'
    },
    viewport: {
      width: '100%',
      height: '100%',
      backgroundColor: 'red',
      transform: `scale(${zoom})`,
    }
  };

  useEffect(() => {
    const handleMousewheel = (event) => {
      event.preventDefault();
      const zoomFactor = 0.1;

      console.log(zoom);

      // Calculate the new zoom level
      const zoomChange = event.deltaY > 0 ? -zoomFactor : zoomFactor;
      const newZoom = zoom + zoomChange;

      // Ensure the zoom level stays within the desired range (e.g., 0.5 to 3)
      const minZoom = 0.1;
      const maxZoom = 9;

      if (newZoom >= minZoom && newZoom <= maxZoom) {
        setZoom(newZoom);
      }
    };

    const ViewportComponent = ViewportRef.current;

    if(ViewportComponent) {
      ViewportComponent.addEventListener("mousewheel", handleMousewheel, { passive: false });
    }

    return () => {
      if(ViewportComponent) {
        ViewportComponent.removeEventListener("mousewheel", handleMousewheel);
      }
    };
  }, [zoom]);

  useEffect(()=> {
    interact(ViewportRef.current).draggable({
      listeners: {
        move: (event)=> {
          const target = event.target.children[0];
          const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
          const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

          target.style.transform = `scale(${zoom}) translate(${x}px, ${y}px)`;

          target.setAttribute('data-x', x);
          target.setAttribute('data-y', y);

          console.log(x, y);
        }
      }
    })
  }, [zoom]);

  return (
    <div ref={ViewportRef} style={styles.wrapper}>
      <div style={styles.viewport}>

      </div>
    </div>
  );
}

export default ViewPort;
