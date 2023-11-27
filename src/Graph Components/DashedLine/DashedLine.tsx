import styled from "styled-components";

const StyledDashedLine = styled.svg`
  border: 2px dashed #454545;
  overflow: visible;
`

function DashedLine() {
  return (
    <StyledDashedLine xmlns="http://www.w3.org/2000/svg">
    <line 
      x1="1" y1="1" x2="100" y2="100" 
      stroke-linecap="round" 
      stroke="black" 
      stroke-width="1" 
      stroke-dasharray="1 2" 
    />
  </StyledDashedLine>
  )
}

export default DashedLine;