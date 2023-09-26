import Theme from "../../Theme";
import { useState, useEffect, useRef } from 'react'
import interact from 'interactjs'
import { connect } from "react-redux";
import { panzoomState } from '../../Types/Redux/panzoom';

function Node(props: any) {
  const node = useRef<HTMLDivElement>(null);

  const styles: string = `
    .node {
      width: 30px;
      height: 30px;
      border-radius: 50%;

      color: ${Theme.nodeFgColor};
      background-color: ${Theme.nodeBgColor};
      border: 1px solid ${Theme.nodeBorderColor};

      display: flex;
      justify-content: center;
      align-items: center;
      
      font-family: Open Sans;
    }
  `
  useEffect(()=> {
    if(node.current) {
      const draggable = interact(node.current).draggable({
        listeners: {
          move: (event)=> {
            const target = event.target; 
  
            const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx / props.scale;
            const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy / props.scale;

            target.style.transform = `translate(${x}px, ${y}px)`;
  
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
          }
        }
      });

      return () => {
        draggable.unset();
      };
    }
  }, [props.scale]);

  return (
    <>
      <style> {styles} </style>
      <div className="node excluded-class" ref={node}>{props.label}</div>
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {
    scale: state.panzoom.scale
  }
}

export default connect(
  mapStateToProps
)(Node)