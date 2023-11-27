import styled from "styled-components";

const StyledSvg = styled.svg`
  overflow: visible;
  position: absolute;
  z-index: -1;

  .line{
    stroke: gray;
    stroke-width: 2;
    fill: none;
    stroke-linecap: round;
  }
`

function DashedLine({x1, y1, x2, y2}: any) {
  return (
    <StyledSvg xmlns="http://www.w3.org/2000/svg"> 
      <line className="line"
        x1={x1} 
        y1={y1} 
        x2={x2} 
        y2={y2} 
        stroke-dasharray="5 5" 
      />
    </StyledSvg>
  )
}

export default DashedLine;