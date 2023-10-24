import styled from 'styled-components';


const StyledTextField = styled.div`
    color: #6A6A9F;
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    display: inline-block;
`

function TextField(props: any) {
  return (
    <StyledTextField>{props.text}</StyledTextField>
  )
}
export default TextField;