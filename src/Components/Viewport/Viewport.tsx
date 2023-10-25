import Panzoom from '@panzoom/panzoom'
import styled from 'styled-components';
import { connect } from "react-redux";
import { useState, useEffect, useRef } from "react";

import Theme from "../../Theme.tsx";

import { toggleCreatingPath, updateScale } from '../../Redux/index.tsx';
import { updatePan } from '../../Redux/Panzoom/panzoomActionCreaters.tsx';

import Node from "../../Graph Components/Node/Node.tsx";
import Path from "../../Graph Components/Path/Path.tsx";
import GraphPattern from '../Graph Pattern/GraphPattern.tsx';
import PseudoPath from '../../Graph Components/Pseudo Path/PseudoPath.tsx';
import NavigationButton from '../../Widget Components/Navigation Button/NavigationButton.tsx';

const StyledViewportWrapper = styled.div`
  background-color: ${Theme.viewportColor};
  position:relative;
`

function Viewport(props: any) {
  const [x2, setX2] = useState(0);
  const [y2, setY2] = useState(0);
  const [isAddEdgeBtnClicked, setIsAddBtnClicked] = useState(false);
  const viewport = useRef<HTMLDivElement>(null);
  const nodesWrapper = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    const handlePointerUp = (e:any) => {
      if (!nodesWrapper.current?.contains(e.target)) {
        props.toggleCreatingPath(props.creatingPath);
      }
    };
    viewport.current?.addEventListener('pointerup', handlePointerUp);
  
    return () => {
      viewport.current?.removeEventListener('pointerup', handlePointerUp);
    };
  }, [props.creatingPath]);
  

  useEffect(() => {
    viewport.current?.parentElement?.addEventListener('pointermove', (e) => {
      const rect = viewport.current?.getBoundingClientRect();
      setX2((e.clientX - (rect?.left || 0))/props.scale); // Use optional chaining and fallback value
      setY2((e.clientY - (rect?.top || 0))/props.scale);  // Use optional chaining and fallback value
    });
  }, []);
  

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

  return (
    <>
      <StyledViewportWrapper>
        <div onClick={()=>{setIsAddBtnClicked(!isAddEdgeBtnClicked)}}><NavigationButton color={isAddEdgeBtnClicked ? '#FFFFFF' : '#6A6A9F'}/></div>

        <GraphPattern/>

        <div className="viewport__body" ref={viewport}>
          <div className="nodes-wrapper" ref={nodesWrapper}>
            {Object.entries(props.node).map(([nodeID, nodeData]: [string, any])=>(
              <Node label={nodeData.label} key={nodeID} id={nodeID} addEdge={isAddEdgeBtnClicked}/>
            ))}
          </div>

          { props.creatingPath && <PseudoPath x2={x2} y2={y2}/>}
        </div>
      </StyledViewportWrapper>
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    scale: state.panzoom.scale,
    node: state.node.data,
    creatingPath: state.globalFlags.creatingPath
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateScale: (scale: number) => {
      dispatch(updateScale(scale))
    },
    updatePan: (pan: { x: number, y: number }) => {
      dispatch(updatePan(pan))
    },
    toggleCreatingPath: (creatingPath: boolean)=> {
      dispatch(toggleCreatingPath(creatingPath))
    },
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Viewport)
