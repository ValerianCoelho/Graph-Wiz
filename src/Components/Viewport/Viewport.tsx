import Panzoom from '@panzoom/panzoom'
import { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { updateScale } from '../../Redux/index.tsx';
import { updatePan } from '../../Redux/Panzoom/panzoomActionCreaters.tsx';
import Theme from "../../Theme.tsx";
import Node from "../../Graph Components/Node/Node.tsx";
import Path from "../../Graph Components/Path/Path.tsx";
import GraphPattern from '../Graph Pattern/GraphPattern.tsx';
import styled from 'styled-components';
import NavigationButton from '../../Widget Components/Navigation Button/NavigationButton.tsx';

const StyledViewportWrapper = styled.div`
  background-color: ${Theme.viewportColor};
  position:relative;
`

function Viewport(props: any) {
  const [isAddEdgeBtnClicked, setIsAddBtnClicked] = useState(false);
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

  return (
    <>
      <StyledViewportWrapper>
        <div onClick={()=>{setIsAddBtnClicked(!isAddEdgeBtnClicked)}}><NavigationButton color={isAddEdgeBtnClicked ? '#FFFFFF' : '#6A6A9F'}/></div>
        <GraphPattern/>
        <div className="viewport__body" ref={viewport}>
          <div>HEllo</div>
          {Object.entries(props.node).map(([nodeID, nodeData]: [string, any])=>(
            <Node label={nodeData.label} key={nodeID} id={nodeID} addEdge={isAddEdgeBtnClicked}/>
          ))}
          {/* {props.node.map((nodeData: any, index: number) => (
            <Node label={nodeData.label} key={index} id={index} addEdge={isAddEdgeBtnClicked}/>
          ))}  */}
          <Path x1="10" y1="50" x2="500" y2="70"/>
        </div>
      </StyledViewportWrapper>
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
