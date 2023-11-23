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
    fill: transparent;
  }
`

function Path({x1, y1, x2, y2, ...props}:any) {
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
    <StyledSvg ref={path} width="1" height="1" xmlns="http://www.w3.org/2000/svg" $selectedComponentID={props.selectedComponentID} $id={props.id}>
      <path d={`M${x1},${y1} L${x2},${y2}`}/>
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