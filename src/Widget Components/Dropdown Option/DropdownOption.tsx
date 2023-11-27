import {  useState } from "react";
import styled from "styled-components";



const StyledDropdownOptions = styled.div`
    font-family: 'Open Sans';
    border-bottom: 1px solid #6A6A9F;
    cursor: default;
    user-select: none;
`
const StyledDropdownTitle  = styled.div`
    padding: 10px 0;
    padding-left: 20px;
`
const StyledDropdownList = styled.div`
    list-style-type: none;
    display:block;
    max-height:0;
    overflow-y: hidden;
    transition: all 0.2s ease-in-out;
    &.active{
        max-height: 1000px;
        overflow-y: visible;
    }

`
const StyledDropdownOption = styled.div`
    background-color: #191932;
    margin-bottom: 2px;
    padding: 5px 0;
    padding-left: 20px;
    &:hover{
    background-color: #0E0E1C;
    outline: 1px solid #6A6A9F;
    }
`

function DropdownOption(props: any) {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <StyledDropdownOptions>
        <StyledDropdownTitle onClick={()=>{setIsOpen(!isOpen)}}>{props.title}</StyledDropdownTitle>
        <StyledDropdownList className={isOpen?"active":""}  >
            {props.optionList.map((option: any)=>(
            <StyledDropdownOption key={option} onClick={()=>{console.log(option)}}> {option} </StyledDropdownOption>
            ))}
        </StyledDropdownList>
    </StyledDropdownOptions>
  )
}

export default DropdownOption;