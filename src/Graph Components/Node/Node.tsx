import interact from 'interactjs'
import styled from "styled-components";
import Theme from "../../Theme";
import { connect } from "react-redux";
import { updateNodeCoord } from "../../Redux";
import { updatePseudoPathStartCoords } from '../../Redux';
import { toggleCreatingPath } from '../../Redux';
import { useEffect, useRef } from 'react'

const StyledNode = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;

  color: ${Theme.nodeFgColor};
  background-color: ${Theme.nodeBgColor};
  border: 1px solid ${Theme.nodeBorderColor};

  display: flex;
  justify-content: center;
  align-items: center;
  
  font-family: 'Open Sans';

  position: absolute;
  top: 0;
  left: 0;
`
const AddEdgeBtn = styled.div`
  background-color: #05050F;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Label = styled.div`
  z-index: 3;

`

function Node(props: any) {
  const node = useRef<HTMLDivElement>(null);
  const addEdgeBtn = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = () => {
      const rect = node.current?.getBoundingClientRect();
      const width = rect?.width || 0; // node elements width
      const height = rect?.height || 0; // node elements height

      const nodeCoords = props.node[props.id].coord; // from redux store

      props.onClick(props.id)
      props.updatePseudoPathStartCoords({x: nodeCoords[0] + (width/2), y: nodeCoords[1] + (height/2)})
      props.toggleCreatingPath(props.creatingPath);
    };
  
    addEdgeBtn.current?.addEventListener('pointerdown', handleClick);
  
    return () => {
      addEdgeBtn.current?.removeEventListener('pointerdown', handleClick);
    };
  }, [props.addEdge, props.creatingPath,props.node]);  

  useEffect(()=> {
    if(node.current) {
      const draggable = interact(node.current).draggable({
        ignoreFrom: '.ignore-interact',
        listeners: {
          move: (event)=> {
            const target = event.target; 
  
            const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx / props.scale;
            const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy / props.scale;

            target.style.transform = `translate(${x}px, ${y}px)`;
  
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
            
            props.updateNodeCoord(props.id, [x, y]);
          }
        }
      });

      return () => {
        draggable.unset();
      };
    }
  }, [props.scale]);

  return (
    <StyledNode className='excluded-class' ref={node}>
      { props.addEdge ? <AddEdgeBtn className='ignore-interact' ref={addEdgeBtn}>
                          <Label data-node-id={props.id}>{props.label}</Label>
                        </AddEdgeBtn>
                      : <Label>{props.label}</Label>
      }
    </StyledNode>
  )
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
    updateNodeCoord: (id: string, coord: Array<number>) => {
      dispatch(updateNodeCoord(id, coord))
    },
    toggleCreatingPath: (creatingPath: boolean)=> {
      dispatch(toggleCreatingPath(creatingPath))
    },
    updatePseudoPathStartCoords: (coords: {x: number, y: number})=> {
      dispatch(updatePseudoPathStartCoords(coords))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Node)