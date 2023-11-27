import interact from "interactjs";
import { useEffect, useRef } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { updateAnchorCoord } from "../../Redux";

const StyledAnchor = styled.div`
  width: 15px;
  height: 15px;
  background-color: white;
  border-radius: 50%;
  border: 2px solid #0080F6;
  
  position: absolute;
  top: 0;
  left: 0;
`;


function AnchorPoint(props: any) {
  const anchorPointRef = useRef<HTMLDivElement>(null);

  useEffect(()=> {
    if(anchorPointRef.current) {
      anchorPointRef.current.style.transform = `translate(${props.initialXPos}px, ${props.initialYPos}px)`;
    }
  }, [])

  // Setup the Interactjs Library for the nodes
  useEffect(()=> { 
    if(anchorPointRef.current) {
      const draggable = interact(anchorPointRef.current).draggable({
        listeners: {
          move: (event)=> {
            const target = event.target; 
  
            // Update node coordinates during dragging
            const x = (parseFloat(target.getAttribute('data-x')) || props.initialXPos) + event.dx / props.scale;
            const y = (parseFloat(target.getAttribute('data-y')) || props.initialYPos) + event.dy / props.scale;

            target.style.transform = `translate(${x}px, ${y}px)`;
  
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);

            props.updateAnchorCoord(props.selectedComponentID, props.anchor, {ax:x, ay:y});
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
    <StyledAnchor
      ref={anchorPointRef}
      className="excluded-class"
    />
  )
}

// Map Redux state to component props
const mapStateToProps = (state: any) => {
  return {
    scale: state.panzoom.scale,
    selectedComponentID: state.globalFlags.selectedComponentID
  }
}

// Map Redux actions to component props
const mapDispatchToProps = (dispatch: any) => {
  return {
    updateAnchorCoord: (pathID: string, anchor: string, a: {ax: number, ay: number})=> {
      dispatch(updateAnchorCoord(pathID, anchor, a))
    }
  }
}

// Connect the component to the Redux store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnchorPoint)