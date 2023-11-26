import Theme from "../../Theme";
import { useEffect, useRef } from 'react'
import { setSelectedComponent } from "../../Redux";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledSvg = styled.svg<{$selectedComponentID:string, $id:string}>`
  overflow: visible;
  position: absolute;
  z-index: -1;

  path{
    stroke: ${props => props.$id === props.$selectedComponentID ? 'blue' : Theme.pathStroke};
    stroke-width: 2;
    fill: none;
  }
  path:hover {
    stroke: ${props => props.$id === props.$selectedComponentID ? 'none' : 'gray'}; // Change this to a better color
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
      $selectedComponentID={props.selectedComponentID}
      xmlns="http://www.w3.org/2000/svg" 
    > 
      <path d={calculatePath(x1, y1, ax1, ay1, ax2, ay2, x2, y2)}/>
    </StyledSvg>
  )
}

const mapStateToProps = (state: any) => {
  return {
    selectedComponentID: state.globalFlags.selectedComponentID
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