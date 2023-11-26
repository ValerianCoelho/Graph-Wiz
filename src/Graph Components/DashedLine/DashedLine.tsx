import styled from "styled-components";

const StyledDashedLine = styled.hr`
  border: 2px dashed #454545;
  width: 100px;
`

function DashedLine() {
  return (
    <StyledDashedLine />
  )
}

export default DashedLine;