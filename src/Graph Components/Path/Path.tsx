import Theme from "../../Theme";
import { useEffect, useRef } from 'react'
import { setSelectedComponent } from "../../Redux";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledSvg = styled.svg<{$selectedComponentID:string, $id:string, $scale:number, $isCreatingPath:boolean}>`
  overflow: visible;
  position: absolute;
  z-index: -1;
  pointer-events: none;

  .path{
    stroke: ${props => props.$id === props.$selectedComponentID ? 'blue' : Theme.pathStroke};
    stroke-width: 2;
    fill: none;
    pointer-events: stroke;
  }
  .hidden-path {
    stroke: transparent;
    stroke-width: ${props => 10 / props.$scale}; // changes based on zoom level
    fill: none;
    pointer-events: stroke;
  }
  .path:hover, .hidden-path:hover + .path{
    stroke: ${props => props.$isCreatingPath 
              ? "white" 
              : props => props.$id === props.$selectedComponentID 
                ? 'blue' 
                : 'gray'
            }; // Change this to a better color}
    
  }
`

function calculatePath(x1: number, y1: number, ax1: number, ay1: number, ax2: number, ay2: number, x2: number, y2: number): string {
  if(ax2 && ay2) {
    return `M ${x1} ${y1} C ${ax1} ${ay1}, ${ax2} ${ay2}, ${x2} ${y2}`;
  }
  if(ax1 && ay1) {
    return `M ${x1} ${y1} Q ${ax1} ${ay1}, ${x2} ${y2}`;
  }
  return `M ${x1}, ${y1} L ${x2}, ${y2}`;
}

function Path({x1, y1, ax1, ay1, ax2, ay2, x2, y2, ...props}:any) {
  const path = useRef<SVGSVGElement>(null);

  useEffect(()=> {
    const handleDblClick = ()=> {
      props.setSelectedComponent(props.id);
    }
    path.current?.addEventListener('dblclick', handleDblClick);

    return ()=> {
      path.current?.removeEventListener('dblclick', handleDblClick);
    }
  }, [])
  
  return (
    <StyledSvg 
      ref={path}
      $id={props.id}
      $scale={props.scale}
      $isCreatingPath={props.isCreatingPath}
      $selectedComponentID={props.selectedComponentID}
      xmlns="http://www.w3.org/2000/svg" 
    > 
      <defs>
        <marker
          id="arrow"
          viewBox="0 0 10 10"
          refX={props.isCreatingPath ? "5" : "19"}
          refY="5"
          markerWidth={1.5 * props.scale}
          markerHeight={1.5 * props.scale}
          orient="auto-start-reverse"
          fill="white"
          >
          <path d="M 0 0 L 10 5 L 0 10 z" />
        </marker>
      </defs>    
      <path className="hidden-path" d={calculatePath(x1, y1, ax1, ay1, ax2, ay2, x2, y2)} markerEnd="url(#arrow)"/>
      <path id={`path-${props.id}`} className="path" d={calculatePath(x1, y1, ax1, ay1, ax2, ay2, x2, y2)}/>

      { props.weightOption === 'Weighted' && 
        <text fontFamily="Arial" fontSize="10" fill="white">
          <textPath xlinkHref={`#path-${props.id}`} startOffset="50%" textAnchor="middle">
            <tspan dy="-5">{props.weight}</tspan>
          </textPath>
        </text>
      }
    </StyledSvg>
  )
}

const mapStateToProps = (state: any) => {
  return {
    scale: state.panzoom.scale,
    isCreatingPath: state.globalFlags.isCreatingPath,
    selectedComponentID: state.globalFlags.selectedComponentID,
    weightOption: state.globalFlags.weightOption,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setSelectedComponent: (selectedComponentID: string)=> {
      dispatch(setSelectedComponent(selectedComponentID))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Path)