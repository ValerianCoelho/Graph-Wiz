import React, { useState, useEffect, useRef } from "react";
import theme from "../theme";

function ViewPort() {
  const [zoom, setZoom] = useState(1);
  const ViewportRef = useRef(null);

  const styles = {
    body: {
      backgroundColor: "#05050F",
      transform: `scale(${zoom})`, // Fix the transform property
      // transition: "transform 0.2s ease-in-out", // Add a smooth transition
      overflow: 'hidden'
    },
  };

  useEffect(() => {
    const handleMousewheel = (event) => {
      event.preventDefault();
      const zoomFactor = 0.1;

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
  }, [zoom]); // Add `zoom` to the dependency array

  return (
    <div ref={ViewportRef} style={styles.body}>
      <h1>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </h1>
    </div>
  );
}

export default ViewPort;
