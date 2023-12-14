import { useEffect, useRef, useState } from "react";
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


function renderNavigationOptions(NavigationOption: any) {
  // const [dropdownOption, setDropdownOption] = useState(''); // this useState causes the fault

  return (
    <StyledNavigationOptions>
      {
        NavigationOption.children?.map((Section: any) => (
          <div className="navigation-section" key={crypto.randomUUID()}>
            {
              Section.map((Option: any) => (
                <ul 
                  // onClick={()=>{setDropdownOption(Option.option)}}
                  key={crypto.randomUUID()}
                >
                  <li>{Option.option}</li>
                  <li>{Option.hotkey}</li>
                  { Option.children 
                    // &&
                    // dropdownOption === Option.option
                    && 
                    <div style={{position: "absolute", right: "-212px", overflow: "visible"}}>
                      {renderNavigationOptions(Option)}
                    </div>
                  }
                </ul>
              ))
            }
          </div>
        ))
      }
    </StyledNavigationOptions>
  )
}

function NavigationDropdown(props: any) {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [currentNavigationTab, setCurrentNavigationTab] = useState('');
  const navigationRef:any = useRef(null);

  function handleNavigationTabClicked(title: string) {
    setCurrentNavigationTab(title);
    if(!isNavigationOpen) {
      setIsNavigationOpen(true);
    }
  }

  function handleClickedOutside(event: any) {
    if(!navigationRef.current.contains(event.target)){
      setIsNavigationOpen(false);
    }
    document.removeEventListener("click", handleClickedOutside);
  }

  useEffect(()=> {
    document.addEventListener("click", handleClickedOutside, true)
  }, [])

  return (
    <>
      <StyledNavigation ref={navigationRef}>
        {
          props.navigationData.map((NavigationOption: any) => (
            <ul key={crypto.randomUUID()}>
              <li onClick={()=>{handleNavigationTabClicked(NavigationOption.title)}}>{NavigationOption.title}</li>
              <div style={{position: "absolute", zIndex: 3}}>
                {isNavigationOpen
                 &&
                 currentNavigationTab === NavigationOption.title
                 && 
                 renderNavigationOptions(NavigationOption)}
              </div>
            </ul>
          ))
        }
      </StyledNavigation>
    </>
  );
}

export default NavigationDropdown;