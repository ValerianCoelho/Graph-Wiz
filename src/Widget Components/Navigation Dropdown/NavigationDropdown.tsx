import styled from "styled-components";

const StyledNavigation = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 10px;
  margin: 0 10px;
  font-family: 'Open Sans';

  & > ul {
    list-style-type: none;

    & > li {
      padding: 2px 10px;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: #252545;
      } 
    }
  }
`;

const StyledNavigationOptions = styled.ul`
  background-color: #252545;
  z-index: 3;
  list-style-type: none;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  & .navigation-section{
    padding: 10px;
    & > ul  {
      cursor: default;
      padding: 5px 10px;
      border-radius: 5px;
      list-style-type: none;
      display: flex;
      justify-content: space-between;
      & > li:first-child {
        margin-right: 40px;
      }
      &:hover {
        background-color: #2F2F4E;
      }
    }
  }
  & .navigation-section:not(:last-child){
    border-bottom: 1px solid #6A6A9F;
  }
`

function renderNavigation(NavigationOption: any) {
  return (
    <StyledNavigationOptions>
      {NavigationOption.children?.map((Section: any) => (
        <div className="navigation-section" key={crypto.randomUUID()}>
          {Section.map((Option: any) => (
            // Add the return statement here
            <ul key={crypto.randomUUID()}>
              <li>{Option.option}</li>
              <li>{Option.hotkey}</li>
              { Option.children 
                && 
                <div style={{position: "absolute", right: "-212px", overflow: "visible"}}>
                  {renderNavigation(Option)}
                </div>
              }
            </ul>
          ))}
        </div>
      ))}
    </StyledNavigationOptions>
  )
}

function NavigationDropdown(props: any) {
  return (
    <>
      <StyledNavigation>
        {props.navigationData.map((NavigationOption: any) => (
          <ul key={crypto.randomUUID()}>
            <li>{NavigationOption.title}</li>
            <div style={{position: "absolute", zIndex: 3}}>
              {renderNavigation(NavigationOption)}
            </div>
          </ul>
        ))}
      </StyledNavigation>
    </>
  );
}

export default NavigationDropdown;