import Theme from "../../Theme";
import { useEffect, useRef } from 'react'
import interact from 'interactjs'

type NodeProps = {
  label: string
}

function Node(props: NodeProps) {
  const node = useRef<HTMLDivElement>(null);

  const styles: string = `
    .Node {
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
      interact(node.current).draggable({
        listeners: {
          move: (event)=> {
            const target = event.target; 
  
            const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
            const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

            target.style.transform = `translate(${x}px, ${y}px)`;
  
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
          }
        }
      })
    }
  }, []);

  return (
    <>
      <style> {styles} </style>
      <div className="Node custom-excluded-class" ref={node}>{props.label}</div>
    </>
  )
}

export default Node;