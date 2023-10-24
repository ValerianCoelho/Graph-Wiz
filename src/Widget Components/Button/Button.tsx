import styled from 'styled-components';

const StyledButton = styled.div`
    background-color: #191932;
    display: inline-block;
    border: 1px solid #6A6A9F;
    padding: 5px;
    font-size: 15px;
    border-radius: 5px;
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    cursor: default;
    &:hover{
    background-color: #25254a;
    }
`

function Button(props: any) {
  return (
    <>
      <StyledButton className='button' onClick={props.handleClick}>{props.text}</StyledButton>
    </>
  )
}
export default Button;