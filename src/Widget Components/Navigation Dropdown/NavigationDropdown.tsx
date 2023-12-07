import styled from "styled-components";

const StyledNavigation = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 10px;
  margin: 0 10px;
  font-family: 'Open Sans';

  li {
    padding: 2px 10px;
    border-radius: 5px;
  }

  li:hover {
    background-color: #252545;
  }
`

function NavigationDropdown(props: any) {
  return (
    <>
      <StyledNavigation>
      {
        props.navigationData.map((Option: any)=> {
          return (
            <li>{Option.title}</li>
          )
        })
      }
      </StyledNavigation>
    </>
  )
}

export default NavigationDropdown;