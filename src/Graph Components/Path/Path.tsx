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
    stroke: ${props => props.$id === props.$selectedComponentID ? '#1976d2' : Theme.pathStroke};
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
              ? "rgba(0, 0, 0, .4)" 
              : props => props.$id === props.$selectedComponentID 
                ? '#1976d2' 
                : '#1976d2'
            }; // Change this to a better color}
    
  }
`

function calculateSlope(p1: number, p2: number, p3: number, p4: number){
  const t = 0.5;
  if(p3) {
    return p1 * (-3 * t ** 2 + 6 * t - 3) + 
           p2 * (9 * t ** 2 - 12 * t + 3) + 
           p3 * (-9 * t ** 2 + 6 * t) + 
           p4 * (3 * t ** 2);
  }
  if(p2) {
    return p1 * (2 * t - 2) + 
           p2 * (2 - 4 * t) + 
           p4 * (2 * t);
  }
  if(p1) {
    return p1 * (-1) + p4;
  }
  return 0;
}

function calculateInclination(p1: {x: number, y: number}, 
                              p2: {x: number, y: number}, 
                              p3: {x: number, y: number}, 
                              p4: {x: number, y: number}) {
  const dx = calculateSlope(p1.x, p2.x, p3.x, p4.x);
  const dy = calculateSlope(p1.y, p2.y, p3.y, p4.y);
  const slope = dx / dy;
  const inclinationRadians = Math.atan(slope)
  const inclinationDegrees = (inclinationRadians * 180) / Math.PI;
  return inclinationDegrees + 90;
}

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
          fill="#1976d2"
          viewBox="0 0 10 10"
          orient="auto-start-reverse"
          refY="5"
          refX={props.isCreatingPath ? "5" : "21"}
          markerWidth={1.2 * props.scale}
          markerHeight={1.2 * props.scale}
        >
          <path d="M 0 0 L 10 5 L 0 10 z" />
        </marker>
      </defs>    
      <path id={`path-${props.id}`} className="path" d={calculatePath(x1, y1, ax1, ay1, ax2, ay2, x2, y2)}/>
      <path 
        className="hidden-path" 
        d={calculatePath(x1, y1, ax1, ay1, ax2, ay2, x2, y2)} 
        markerStart={props.directedOption === 'Directed' && props.direction === 'Backward' ? "url(#arrow)" : ""}
        markerEnd={props.directedOption === 'Directed' && props.direction === 'Forward' ? "url(#arrow)" : ""}
      />

      { props.weightOption === 'Weighted' && 
        <text fontFamily="Arial" fontSize="10" fill="rgba(0, 0, 0, .6)">
          <textPath xlinkHref={`#path-${props.id}`} startOffset="50%" textAnchor="middle">
            <tspan rotate={calculateInclination({x: x1, y: y1}, {x: ax1, y: ay1}, {x: ax2, y: ay2}, {x: x2, y: y2})} dy="-5">{props.weight}</tspan>
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
    directedOption: state.globalFlags.directedOption,
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