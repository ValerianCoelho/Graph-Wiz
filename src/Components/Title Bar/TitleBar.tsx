import { useState,useRef, useEffect } from 'react';
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

const titleBarRef:any=useRef(null);

const [activeBtn,setActiveBtn] = useState("");

const selectBtn=(title:string)=>{
  setActiveBtn(title);
}
const unSelectBtn=()=>{
  setActiveBtn("None");
}

function handleClickCheck(e:any){

  if(!titleBarRef.current.contains(e.target)){
    unSelectBtn();
  }
  document.removeEventListener("click",handleClickCheck);
}

useEffect(()=>{
  document.addEventListener("click",handleClickCheck,true)

},[titleBarRef])


  return (
    <>
      <StyledTitleBar className="title-bar__body" ref={titleBarRef}>
        <TitleDropDown
          title="File" 
          options={["Save","Save As","Export","Share"]}
          activeBtn={activeBtn}
          selectBtn={selectBtn}
          unSelectBtn={unSelectBtn}
        />
        <TitleDropDown
          title="Edit"
          options={["preferences","theme","settings"]}
          activeBtn={activeBtn}
          selectBtn={selectBtn}
          unSelectBtn={unSelectBtn}
        />
        <TitleDropDown
          title="View"
          options={["node addition","move","path trace","animation"]}
          activeBtn={activeBtn}
          selectBtn={selectBtn}
          unSelectBtn={unSelectBtn}
        />
        <TitleDropDown
          title="Help"
          options={["docs","references","tutorials"]}
          activeBtn={activeBtn}
          selectBtn={selectBtn}
          unSelectBtn={unSelectBtn}
        />
      </StyledTitleBar>
      
    </>
  )
}
  
export default TitleBar;