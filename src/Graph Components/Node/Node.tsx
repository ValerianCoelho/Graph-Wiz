import interact from 'interactjs'
import styled from "styled-components";

import { connect } from "react-redux";
import { useEffect, useRef } from 'react'

import { updateNodeCoord } from "../../Redux";
import { setIsCreatingPath } from '../../Redux';
import { setSelectedComponent } from '../../Redux';
import { updatePseudoPathStartCoords } from '../../Redux';

import Theme from "../../Theme";

const StyledNode = styled.div<{$selectedComponentID:string,$id:string}>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  
  color: ${Theme.nodeFgColor};
  background-color: ${Theme.nodeBgColor};
  
  border: 2px solid ${props => props.$id == props.$selectedComponentID ? '#1976d2' : Theme.nodeBorderColor}; // why is this throwing an error?

  display: flex;
  justify-content: center;
  align-items: center;
  
  font-family: 'Open Sans';

  position: absolute;
  top: 0;
  left: 0;
`
const AddEdgeBtn = styled.div`
  background-color: rgba(0, 0, 0, .2);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Label = styled.div`
  // Label Styles
`

function Node(props: any) {
  const node = useRef<HTMLDivElement>(null);
  const addEdgeBtn = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (node.current) {
      node.current.style.transform = `translate(${props.coord.x}px, ${props.coord.y}px)`;
    }
  }, []);

  // when a node is double-clicked, the new selectedComponent would be the this instance of the node
  useEffect(()=> {
    const handleDblClick = ()=> {
      props.setSelectedComponent(props.id); // update the selectedComponent's value as ID of current node instance
    }
    node.current?.addEventListener('dblclick', handleDblClick);

    return ()=> {
      node.current?.removeEventListener('dblclick', handleDblClick);
    }
  }, [])

  // Bug in here, fix later
  useEffect(()=> {
    // console.log('selectedComponentID: ', props.selectedComponentID) // why is this running as many times as the number of components
  }, [props.selectedComponentID])

  // handle initial steps to be performed while creating a new path
  useEffect(() => {
    const handlePointerDown = () => {
      const rect = node.current?.getBoundingClientRect();
      const width = rect?.width || 0; // Node element's width
      const height = rect?.height || 0; // Node element's height
      const nodeCoords = props.node[props.id].coord; // from redux store

      props.onPointerDown(props.id) // save the current node's id as fromNodeID for the path about to be created
      props.updatePseudoPathStartCoords({ // Update the pseudo-path's start coords (x1, y1)
        x: nodeCoords.x + (width / 2) / props.scale, 
        y: nodeCoords.y + (height / 2) / props.scale
      })
      props.setIsCreatingPath(true); // set isCreatingPath flag to true
    };
    addEdgeBtn.current?.addEventListener('pointerdown', handlePointerDown);
  
    return () => {
      addEdgeBtn.current?.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [props.addEdge, props.isCreatingPath, props.node, props.scale]);  

  // Setup the Interactjs Library for the nodes
  useEffect(()=> { 
    if(node.current) {
      const draggable = interact(node.current).draggable({
        ignoreFrom: '.ignore-interact', // Ignore elements with this class for dragging
        listeners: {
          move: (event)=> {
            const target = event.target; 
  
            // Update node coordinates during dragging
            const x = (parseFloat(target.getAttribute('data-x')) || props.coord.x) + event.dx / props.scale;
            const y = (parseFloat(target.getAttribute('data-y')) || props.coord.y) + event.dy / props.scale;

            target.style.transform = `translate(${x}px, ${y}px)`;
  
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
            
            // Update node coordinates in the Redux store
            props.updateNodeCoord(props.id, {x: x, y: y});
          }
        }
      });

      return () => {
        // Clean up the draggable behavior
        draggable.unset();
      };
    }
  }, [props.scale]); // whenever scale changes translation formula needs to update

  return (
    <StyledNode 
      ref={node} 
      className='excluded-class' // Exclude elements with this classname from being panned because of the Panzoom Library
      $id={props.id} // props passed to styled components
      $selectedComponentID={props.selectedComponentID} // props passed to styled components
    >
      { props.addEdge ? <AddEdgeBtn className='ignore-interact' ref={addEdgeBtn}>
                          <Label 
                            data-node-id={props.id} // store the nodeID in the Label-Elements Attribute
                          >{props.label}</Label>
                        </AddEdgeBtn>
                      : <Label>{props.label}</Label>
      }
    </StyledNode>
  )
}

// Map Redux state to component props
const mapStateToProps = (state: any) => {
  return {
    node: state.node.data,
    scale: state.panzoom.scale,
    isCreatingPath: state.globalFlags.isCreatingPath,
    selectedComponentID: state.globalFlags.selectedComponentID
  }
}

// Map Redux actions to component props
const mapDispatchToProps = (dispatch: any) => {
  return {
    updateNodeCoord: (id: string, coord: {x: number, y: number}) => {
      dispatch(updateNodeCoord(id, coord))
    },
    setIsCreatingPath: (isCreatingPath: boolean)=> {
      dispatch(setIsCreatingPath(isCreatingPath))
    },
    updatePseudoPathStartCoords: (coords: {x: number, y: number})=> {
      dispatch(updatePseudoPathStartCoords(coords))
    },
    setSelectedComponent: (selectedComponentID: string)=> {
      dispatch(setSelectedComponent(selectedComponentID))
    }
  }
}

// Connect the component to the Redux store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Node)