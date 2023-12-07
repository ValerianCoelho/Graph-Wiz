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
  background-color: white;
  z-index: 3;
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
                <div key={NavigationOptionIndex * 10 + SectionIndex}>
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