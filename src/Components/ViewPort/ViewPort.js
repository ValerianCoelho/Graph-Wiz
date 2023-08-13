import React, { useState, useEffect, useRef } from "react";
import theme from "../theme";
import interact from "interactjs";

function ViewPort() {
  const [zoom, setZoom] = useState(1);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const ViewporWrappertRef = useRef(null);
  const viewportRef = useRef(null);

  const styles = {
    wrapper: {
      backgroundColor: "#05050F",
      overflow: 'hidden',
    },
    viewport: {
      width: '100%',
      height: '100%',
      backgroundColor: theme.background,
      transform: `scale(${zoom}) translate(${x}px, ${y}px)`,
    }
  };

  useEffect(() => {
    const handleMousewheel = (event) => {
      event.preventDefault();
      const zoomFactor = 0.1;

      const zoomChange = event.deltaY > 0 ? -zoomFactor : zoomFactor;
      const newZoom = zoom + zoomChange;

      const minZoom = 0.5;
      const maxZoom = 2;

      const target = viewportRef.current;

      const cx = event.clientX - viewportRef.current.offsetLeft;
      const cy = event.clientY - viewportRef.current.offsetTop;

      const vx = viewportRef.current.getBoundingClientRect().left - viewportRef.current.offsetLeft;
      const vy = viewportRef.current.getBoundingClientRect().top - viewportRef.current.offsetTop;

      const dx = - Math.ceil(zoomChange) * ((vx + (cx * newZoom)) - cx) / newZoom;
      const dy = - Math.ceil(zoomChange) * ((vy + (cy * newZoom)) - cy) / newZoom;

      const x = (parseFloat(target.getAttribute('data-x')) || 0) + dx;
      const y = (parseFloat(target.getAttribute('data-y')) || 0) + dy;

      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);

      if (newZoom >= minZoom && newZoom <= maxZoom) {
        setZoom(newZoom);
        setX(x);
        setY(y);

      }
    };

    const ViewportComponent = ViewporWrappertRef.current;

    if(ViewportComponent) {
      ViewportComponent.addEventListener("mousewheel", handleMousewheel, { passive: false });
    }

    return () => { // what is the need for this?
      if(ViewportComponent) {
        ViewportComponent.removeEventListener("mousewheel", handleMousewheel);
      }
    };
  }, [zoom]);

  useEffect(()=> {
    interact(ViewporWrappertRef.current).draggable({
      listeners: {
        move: (event)=> {
          const target = event.target.children[0]; 
          const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx / zoom;
          const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy / zoom;

          setX(x);
          setY(y);

          target.setAttribute('data-x', x);
          target.setAttribute('data-y', y);
        }
      }
    })
  }, [zoom]);

  return (
    <div ref={ViewporWrappertRef} style={styles.wrapper}>
      <div ref={viewportRef} style={styles.viewport}>
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
