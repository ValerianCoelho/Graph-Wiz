import interact from 'interactjs'
import styled from "styled-components";
import Theme from "../../Theme";
import { connect } from "react-redux";
import { updateNodeCoord } from "../../Redux";
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
`
const AddEdgeBtn = styled.div`
  background-color: #05050F;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
`
const Label = styled.div`
  z-index: 3;

`

function Node(props: any) {
  const node = useRef<HTMLDivElement>(null);

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
      <Label className={props.addEdge ? 'ignore-interact': ''}>{props.label}</Label>
      {props.addEdge? <AddEdgeBtn className='ignore-interact'></AddEdgeBtn> : <></>}
    </StyledNode>
  )
}

const mapStateToProps = (state: any) => {
  return {
    scale: state.panzoom.scale,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateNodeCoord: (id: string, coord: Array<number>) => {
      dispatch(updateNodeCoord(id, coord))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Node)