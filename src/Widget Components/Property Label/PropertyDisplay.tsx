import styled from 'styled-components';

const StyledPropertyLabel = styled.div`
    display: flex;
    text-align: center;
    border: 1px solid #6A6A9F;
    border-radius: 5px;
    overflow: hidden;
    font-family: 'Open Sans', 'Arial';
`
const StyledProperty = styled.div`
    background-color: #191932;
    border-right: 1px solid #6A6A9F;
    width: 70%;
`
const StyledValue = styled.div`
    flex-grow: 1;
`

function PropertyLabel(props: any) {
  return (
    <StyledPropertyLabel>
      <StyledProperty> {props.property} </StyledProperty>
      <StyledValue> {props.value} </StyledValue>
    </StyledPropertyLabel>
  )
}

export default PropertyLabel;