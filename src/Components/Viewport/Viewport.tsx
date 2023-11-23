import Panzoom from '@panzoom/panzoom'
import styled from 'styled-components';
import { connect } from "react-redux";
import { useState, useEffect, useRef } from "react";

import Theme from "../../Theme.tsx";

import { setIsCreatingPath, updateScale } from '../../Redux/index.tsx';
import { updatePan } from '../../Redux/Panzoom/panzoomActionCreaters.tsx';
import { addPath } from '../../Redux/index.tsx';
import { deletePath } from '../../Redux/index.tsx';
import { deleteNode } from '../../Redux/index.tsx';
import { setSelectedComponent } from '../../Redux/index.tsx';

import Node from "../../Graph Components/Node/Node.tsx";
import Path from "../../Graph Components/Path/Path.tsx";
import PseudoPath from '../../Graph Components/Pseudo Path/PseudoPath.tsx';
import NavigationButton from '../../Widget Components/Navigation Button/NavigationButton.tsx';

const StyledViewportWrapper = styled.div`
  background-color: ${Theme.viewportColor};
  position:relative;
`
const StyledGraphPatternWrapper = styled.div`
  height:100%;
  width:100%;
  position:absolute;
  z-index:0;
`
const StyledPatternSvg = styled.svg`
  height:100%;
  width:100%;
`
const StyledPatternBg = styled.div`
  height:100%;
  width:100%;
  background-color:transparent;
  position:absolute;
`
const StyledPatternLine = styled.line`
  stroke: #2A2A2F;
  position: absolute;
`

function Viewport(props: any) {
  const [x2, setX2] = useState(0);
  const [y2, setY2] = useState(0);
  const [fromNodeID, setFromNodeID] = useState(null);
  const [isAddEdgeBtnClicked, setIsAddBtnClicked] = useState(false);
  const viewport = useRef<HTMLDivElement>(null);
  const nodesWrapper = useRef<HTMLDivElement>(null);

  const threshold = 50; // seems to control how big the squares are
  const subdivisions = 10; // thin line subdivisions
  let scale=props.scale*300;
  let translation ={
    x:props.pan.x*props.scale,
    y:props.pan.y*props.scale
  }
  let tileSize:number = (scale) % (subdivisions * threshold) + threshold;
  let thinLineWidth:number = (scale / subdivisions) % threshold / (threshold);
  let thickLineWidth:number=Math.abs((-scale + threshold) % (subdivisions * threshold) / (threshold * subdivisions));
  const thinLines = [...Array(subdivisions).keys()];

  useEffect(()=> {
    const handleClick = (event: any)=> {
      if(event.ctrlKey) {
        props.setSelectedComponent(null); // I need to set creating path to false
      }
    }
    viewport.current?.parentElement?.addEventListener('click', handleClick)
    return ()=> {
      viewport.current?.parentElement?.addEventListener('click', handleClick)
    }
  }, [])

  useEffect(()=> {
    const handleKeyDown = (e: any)=> {
      if (e.keyCode === 46) {
        if (props.path[props.selectedComponentID] && props.path[props.selectedComponentID]['componentType'] === "path") {
          props.deletePath(props.selectedComponentID)
        }
        else if (props.node[props.selectedComponentID] && props.node[props.selectedComponentID]['componentType'] === "node") {
          for(let key in props.path) {
            if(props.path[key]['fromNodeID'] == props.selectedComponentID || props.path[key]['toNodeID'] == props.selectedComponentID) {
              props.deletePath(key)
            }
          }
          props.deleteNode(props.selectedComponentID)
        }
      }
      
    }
    document.addEventListener('keydown', handleKeyDown);
    return ()=> {
      document.removeEventListener('keydown', handleKeyDown);
    }
  })
 
  useEffect(() => {
    const handlePointerUp = (e:any) => {
      if(props.isCreatingPath) {
        if (nodesWrapper.current?.contains(e.target)) {
          const toNodeID = e.target.getAttribute('data-node-id') || e.target.children[0].getAttribute('data-node-id') || e.target.children[0].children[0].getAttribute('data-node-id');
          if(fromNodeID != toNodeID) { // prevent self loops for now
            props.addPath(crypto.randomUUID(), fromNodeID, toNodeID)
          }
        }
        props.setIsCreatingPath(false);
      }
    };
    viewport.current?.parentElement?.addEventListener('pointerup', handlePointerUp);
  
    return () => {
      viewport.current?.parentElement?.removeEventListener('pointerup', handlePointerUp);
    };
  }, [props.isCreatingPath]);
  
  useEffect(() => {
    viewport.current?.parentElement?.addEventListener("pointermove", (e) => {
        const defaultCoords = { left: 0, top: 0 };
        // parent is static graph viewport
        const { left: parentLeft, top: parentTop } =
            viewport.current?.parentElement?.getBoundingClientRect() || defaultCoords;

        // child is the graph viewport that pans
        let { left: childLeft, top: childTop } =
            viewport.current?.getBoundingClientRect() || defaultCoords;

        // update child coords wrt. parent as origin, not window
        childLeft -= parentLeft;
        childTop -= parentTop;

        // these are coordinates from the perspective of the graph viewport, not browser window
        const mouseLeftInParentCoords = e.clientX - parentLeft;
        const mouseTopInParentCoords = e.clientY - parentTop;

        setX2((mouseLeftInParentCoords - childLeft) / props.scale);
        setY2((mouseTopInParentCoords - childTop) / props.scale);
    });
}, [props.scale]);
  
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
          props.updatePan(panzoom.getPan())
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

        <StyledGraphPatternWrapper>
            <StyledPatternBg>
              <StyledPatternSvg>
                <defs>
                    <pattern 
                        id="grid" 
                        x={translation.x} 
                        y={translation.y}
                        width={tileSize}
                        height={tileSize}
                        patternUnits="userSpaceOnUse"
                    >		
                       {thinLines.map((line,index)=>{
                            return <StyledPatternLine key={index} className='pattern__line' strokeWidth={thinLineWidth} x1="0" y1={tileSize * line / subdivisions} x2={tileSize} y2={tileSize * line / subdivisions}/>
                       })}
            
                       {thinLines.map((line,index)=>{
                           return <StyledPatternLine key={index} className='pattern__line' strokeWidth={thinLineWidth} y1="0" x1={tileSize * line / subdivisions} y2={tileSize} x2={tileSize * line / subdivisions}/>
                       })}
                          
                      <StyledPatternLine className='pattern__line' strokeWidth={thickLineWidth} x1="0" y1={thickLineWidth / 2} x2={tileSize} y2={thickLineWidth / 2} />
                      <StyledPatternLine className='pattern__line' strokeWidth={thickLineWidth} x1={thickLineWidth / 2} y1="0" x2={thickLineWidth / 2} y2={tileSize} />
                    </pattern>
                </defs>
                <rect fill="url(#grid)" height="100%" width="100%"></rect>
              </StyledPatternSvg>
            </StyledPatternBg>
        </StyledGraphPatternWrapper>

            <div className="viewport__body" ref={viewport}>
              <div className="nodes-wrapper" ref={nodesWrapper}>
                {Object.entries(props.node).map(([nodeID, nodeData]: [string, any])=>(
                  <Node 
                    label={nodeData.label} 
                    key={nodeID} 
                    id={nodeID} 
                    addEdge={isAddEdgeBtnClicked} 
                    onPointerDown={setFromNodeID}
                    // onDblClick={setSelectedComponent}
                  />
                ))}
              </div>
              <div className="paths-wrapper">
                {Object.entries(props.path).map(([pathID, pathData]: [string, any])=>{
                  if(props.node[pathData.toNodeID]==undefined){return null}
                  const fromNodeCoord = props.node[pathData.fromNodeID].coord;
                  const toNodeCoord = props.node[pathData.toNodeID].coord;
                  return (
                    <Path 
                      key={pathID} 
                      id={pathID}
                      x1={fromNodeCoord[0]+15}  // size of node = 30, therefore offset = 30/2 = 15. change this later
                      y1={fromNodeCoord[1]+15}  // size of node = 30, therefore offset = 30/2 = 15. change this later
                      x2={toNodeCoord[0]+15}    // size of node = 30, therefore offset = 30/2 = 15. change this later
                      y2={toNodeCoord[1]+15}    // size of node = 30, therefore offset = 30/2 = 15. change this later
                      // onDblClick={setSelectedComponent}
                    /> 
                  )
                })}
              </div>

              { props.isCreatingPath && <PseudoPath x2={x2} y2={y2}/>}
            </div>
      </StyledViewportWrapper>
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    scale: state.panzoom.scale,
    node: state.node.data,
    isCreatingPath: state.globalFlags.isCreatingPath,
    path: state.path.pathData,
    pan:state.panzoom.pan,
    selectedComponentID: state.globalFlags.selectedComponentID
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
    setIsCreatingPath: (isCreatingPath: boolean)=> {
      dispatch(setIsCreatingPath(isCreatingPath))
    },
    addPath: (pathID: string, fromNodeID: string, toNodeID: string)=>{
      dispatch(addPath(pathID, fromNodeID, toNodeID))
    },
    deletePath: (pathID: string)=> {
      dispatch(deletePath(pathID))
    },
    deleteNode: (nodeID: string)=> {
      dispatch(deleteNode(nodeID))
    },
    setSelectedComponent: (selectedComponentID: string)=> {
      dispatch(setSelectedComponent(selectedComponentID))
    }
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Viewport)
