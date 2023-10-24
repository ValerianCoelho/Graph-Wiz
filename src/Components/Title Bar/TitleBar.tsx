import { useState } from 'react';
import Theme from '../../Theme.tsx'
import TitleDropDown from '../../Widget Components/Title Dropdown/TitleDropDown.tsx';
import styled from 'styled-components';


const StyledTitleBar=styled.div`
  
background-color: ${Theme.bgColor};
grid-column:  1 / span 3;
display:flex;
flex-direction:row;
align-items:center;
`

function TitleBar() { 

const [activeBtn,setActiveBtn] = useState("Edit");

const selectBtn=(title:string)=>{
  setActiveBtn(title);
}
const unSelectBtn=(title:string)=>{
  setActiveBtn("None");
}

  return (
    <>
      <StyledTitleBar className="title-bar__body">
        <TitleDropDown
          title="File" 
          options={["Something","something2","Something3","Something4"]}
          activeBtn={activeBtn}
          selectBtn={selectBtn}
          unSelectBtn={unSelectBtn}
        />
        <TitleDropDown
          title="Edit"
          options={["something","something"]}
          activeBtn={activeBtn}
          selectBtn={selectBtn}
          unSelectBtn={unSelectBtn}
        />
        <TitleDropDown
          title="View"
          options={["something","something"]}
          activeBtn={activeBtn}
          selectBtn={selectBtn}
          unSelectBtn={unSelectBtn}
        />
        <TitleDropDown
          title="Help"
          options={["something","something"]}
          activeBtn={activeBtn}
          selectBtn={selectBtn}
          unSelectBtn={unSelectBtn}
        />
      </StyledTitleBar>
      
    </>
  )
}
  
export default TitleBar;