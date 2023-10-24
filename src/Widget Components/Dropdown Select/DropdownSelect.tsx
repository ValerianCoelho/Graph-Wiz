import { useState } from "react";
import styled from "styled-components";

const StyledDropdownSelect = styled.div`
    user-select: none;
`
const StyledSelectedOption = styled.div`
    background-color: #191932;
    border: 1px solid #6A6A9F;
    cursor: default;
    border-radius: 5px;
    font-family: 'Open Sans', arial;
    padding-left: 8px;
`
const StyledOptionList = styled.div<{$isOpen:boolean}>`
    cursor: default;
    list-style-type: none;
    background-color: #191932;
    border: 1px solid #6A6A9F;
    border-radius: 5px;
    margin-top: 5px;
    display:${props=>props.$isOpen?"block":"none"};
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



  return (
    <StyledDropdownSelect>
      <StyledSelectedOption  onClick={()=>{setIsOpen(!isOpen)}}> {selectedOption} </StyledSelectedOption>
      <StyledOptionList $isOpen={isOpen} >
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