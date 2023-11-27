import styled from "styled-components";

const StyledDashedLine = styled.svg`
  overflow: visible;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
`

function DashedLine({x1, y1, x2, y2}: any) {
  return (
    <StyledDashedLine viewBox="0 0 960 960" xmlns="http://www.w3.org/2000/svg"> 
      <line 
        x1={x1} y1={y1} x2={x2} y2={y2} 
        stroke-linecap="round" 
        stroke="gray" 
        stroke-width="1" 
        stroke-dasharray="5 5" 
      />
  </StyledDashedLine>
  )
}

export default DashedLine;