import { useEffect, useRef } from "react";
import Panzoom from '@panzoom/panzoom'
import Theme from "../../Theme.tsx";
import Node from "../../Graph Components/Node/Node.tsx";
import Path from "../../Graph Components/Path/Path.tsx";

function Viewport() {
  const viewport = useRef<HTMLDivElement>(null);

  // useEffect(()=> {
  //   if(viewport.current) {
  //     const panzoom = Panzoom(viewport.current, { canvas: true });
  //     const parent = viewport.current.parentElement;
  //     parent?.addEventListener('wheel', (event)=> {
  //       if(event.ctrlKey) {
  //         panzoom.zoomWithWheel(event);
  //       }
  //     });
  //   }
  // }, [])

  const styles: string = `
    .viewport__body__wrapper {
      background-color: ${Theme.bgColor};
    }
  `;

  return (
    <>
      <div className="viewport__body__wrapper">
        <div className="viewport__body" ref={viewport}>
          <Node label='A'/>
          <Node label='B'/>
          <Path x1="10" y1="50" x2="500" y2="70"/>
        </div>
      </div>
      <style>{styles}</style>
    </>
  );
}

export default Viewport;
