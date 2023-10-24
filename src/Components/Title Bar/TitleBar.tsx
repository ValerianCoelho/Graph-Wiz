// import { useState } from 'react';
import Theme from '../../Theme.tsx'
import TitleDropDown from '../../Widget Components/Title Dropdown/TitleDropDown.tsx';
import styled from 'styled-components';
function TitleBar() { 

  const StyledTitleBar=styled.div`
  
      background-color: ${Theme.bgColor};
      grid-column:  1 / span 3;
      display:flex;
      flex-direction:row;
      align-items:center;
  `

  return (
    <>
      <StyledTitleBar className="title-bar__body">
        <TitleDropDown
          title="File" 
          options={["Something","something2","Something3","Something4"]}
        />
        <TitleDropDown
          title="Edit"
          options={["something","something"]}
        />
        <TitleDropDown
          title="View"
          options={["something","something"]}
        />
        <TitleDropDown
          title="Help"
          options={["something","something"]}
        />
      </StyledTitleBar>
      
    </>
  )
}
  
export default TitleBar;