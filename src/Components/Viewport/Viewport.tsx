import Panzoom from '@panzoom/panzoom'
import { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { updateScale } from '../../Redux/index.tsx';
import { updatePan } from '../../Redux/Panzoom/panzoomActionCreaters.tsx';
import Theme from "../../Theme.tsx";
import Node from "../../Graph Components/Node/Node.tsx";
import Path from "../../Graph Components/Path/Path.tsx";
import GraphPattern from '../Graph Pattern/GraphPattern.tsx';

function Viewport(props: any) {
  const viewport = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (viewport.current) {
      const panzoom = Panzoom(viewport.current, {
        canvas: true,
        excludeClass: 'excluded-class',
        cursor: 'default',
        noBind: true
      });
  
      const parent = viewport.current.parentElement;
      let isPointerDown = false;
  
      parent?.addEventListener('wheel', (event) => {
        if (event.ctrlKey) {
          panzoom.zoomWithWheel(event);
          props.updateScale(panzoom.getScale());
        }
      });
  
      parent?.addEventListener('pointerdown', (event) => {
        isPointerDown = true;
        panzoom.handleDown(event);
      });
  
      document.addEventListener('pointermove', (event) => {
        if (isPointerDown) {
          props.updatePan(panzoom.getPan())
          panzoom.handleMove(event);
        }
      });
  
      document.addEventListener('pointerup', (event) => {
        isPointerDown = false;
        panzoom.handleUp(event);
      });
    }
  }, []);

  const styles: string = `
    .viewport__body__wrapper {
      background-color: ${Theme.viewportColor};
      position:relative;
    }
  `;

  return (
    <>
      <div className="viewport__body__wrapper">
        <GraphPattern/>
        <div className="viewport__body" ref={viewport}>
          {props.node.map((nodeData: any, index: number) => (
            <Node label={nodeData.label} key={index} id={index}/>
          ))}
          <Path x1="10" y1="50" x2="500" y2="70"/>
        </div>
      </div>
      <style>{styles}</style>
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    scale: state.panzoom.scale,
    node: state.node.data
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateScale: (scale: number) => {
      dispatch(updateScale(scale))
    },
    updatePan: (pan: { x: number, y: number }) => {
      dispatch(updatePan(pan))
    }
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Viewport)
