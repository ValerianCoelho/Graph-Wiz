import interact from "interactjs";
import { useEffect, useRef } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledAnchor = styled.div`
  width: 15px;
  height: 15px;
  background-color: white;
  border-radius: 50%;
  border: 2px solid #0080F6;
`

function AnchorPoint(props: any) {
  const anchorPointRef = useRef<HTMLDivElement>(null);

  // Setup the Interactjs Library for the nodes
  useEffect(()=> { 
    if(anchorPointRef.current) {
      const draggable = interact(anchorPointRef.current).draggable({
        listeners: {
          move: (event)=> {
            const target = event.target; 
  
            // Update node coordinates during dragging
            const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx / props.scale;
            const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy / props.scale;

            target.style.transform = `translate(${x}px, ${y}px)`;
  
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
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
    scale: state.panzoom.scale
  }
}

// Connect the component to the Redux store
export default connect(
  mapStateToProps
)(AnchorPoint)