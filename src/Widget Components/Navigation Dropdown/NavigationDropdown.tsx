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
  position: absolute;
  background-color: #252545;
  z-index: 3;
  list-style-type: none;
  border-radius: 5px;

  & .navigation-section{
    padding: 10px;

    & > li {
      cursor: default;
      padding: 5px 20px;
      border-radius: 5px;

      &:hover {
        background-color: #2F2F4E;
      }
    }
  }
  & .navigation-section:not(:last-child){
    border-bottom: 1.5px solid #6A6A9F;
  }
`

function NavigationDropdown(props: any) {
  return (
    <>
      <StyledNavigation>
        {props.navigationData.map((NavigationOption: any, NavigationOptionIndex: number) => (
          <ul key={NavigationOptionIndex}>
            <li>{NavigationOption.title}</li>
            <StyledNavigationOptions>
              {NavigationOption.children?.map((Section: any, SectionIndex: number) => (
                <div className="navigation-section" key={NavigationOptionIndex * 10 + SectionIndex}>
                  {Section.map((Option: any, OptionIndex: number) => (
                    // Add the return statement here
                    <li key={NavigationOptionIndex * 100 + SectionIndex * 10 + OptionIndex}>
                      {Option.option}
                    </li>
                  ))}
                </div>
              ))}
            </StyledNavigationOptions>
          </ul>
        ))}
      </StyledNavigation>
    </>
  );
}

export default NavigationDropdown;