import { useState,useRef, useEffect } from "react";
import styled from "styled-components";

const StyledDropdownSelect = styled.div`
    user-select: none;
    position: relative;
`
const StyledSelectedOption = styled.div`
    background-color: #191932;
    border: 1px solid #6A6A9F;
    cursor: default;
    border-radius: 5px;
    font-family: 'Open Sans', arial;
    padding-left: 8px;
`
const StyledOptionList = styled.div`
    cursor: default;
    list-style-type: none;
    background-color: #191932;
    border: 1px solid #6A6A9F;
    border-radius: 5px;
    margin-top: 5px;
    display:block;
    position: absolute;
    width: 100%;
    /* top: 20px; */
    z-index: -5;
    opacity: 0;
    transform: translateY(-20px);
    transition: all 0.2s ease-out;
    &.reveal{
      transform: translateY(0px);
      opacity: 1;
      z-index: 10;
    }

`
const StyledOption = styled.div`
    background-color: #27274F;
    margin: 5px;
    border-radius: 5px;
    padding-left: 5px;
    font-family: 'Open Sans', arial;
    &:hover{
      background-color: #0E0E1C;
    }
`

function DropdownSelect(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(props.optionList[0]);

  const dropDownRef:any = useRef(null);

  function handleOutside(e:any){
    if(!dropDownRef.current.contains(e.target)){
      setIsOpen(false);
    }
    document.removeEventListener("click", handleOutside);
  }

  useEffect(()=>{
    document.addEventListener("click", handleOutside);
  },[])

  return (
    <StyledDropdownSelect ref={dropDownRef}>
      <StyledSelectedOption  onClick={()=>{setIsOpen(!isOpen)}}> {selectedOption} </StyledSelectedOption>
      <StyledOptionList className={isOpen?"reveal":""} >
        {props.optionList.map((option: any)=>(
          <StyledOption key={option} onClick={()=>{
            setSelectedOption(option);
            setIsOpen(!isOpen);
          }}> {option} </StyledOption>
        ))}
      </StyledOptionList>
    </StyledDropdownSelect>
  )
}

export default DropdownSelect;