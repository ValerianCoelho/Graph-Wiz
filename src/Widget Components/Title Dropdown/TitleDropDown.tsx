import styled from "styled-components";

const StyledDropdown = styled.div`
    display:flex;
    position:relative;
    flex-direction:column;
    justify-content:center;
    background-color:#191932;
    font: inherit;
    border-style:none; 
    width: 50px; 
`

const StyledDropdownBtn = styled.button`
    background-color:transparent;
    border-style:none;
    font:1rem;
    color:white;
    width: 50px;
    height: 20px;
`
const StyledDropdownList = styled.div<{$activeBtn:string,$title:string}>`
    flex-direction:column;
    position:absolute;
    border:solid #6A6A9F 1px;
    z-index: 10;
    display: ${props=>props.$activeBtn==props.$title?"block":"none"};
    width:200px;
    top:30px;
    border-radius:5px;
    overflow: hidden;
`
const StyledDropdownListItem = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:start;
    padding-inline-start: 20px;
    align-items:center;
    border-style:none;
    background-color:#191932;
    width:100%;
    color:#6A6A9F;
    height:40px;
    text-transform:lowercase;
    z-index:20;
`

function TitleDropDown(props:any) {

  
  return (
    <>
    <StyledDropdown>

         <StyledDropdownBtn onClick={()=>{(props.activeBtn==props.title)?props.selectBtn(""):props.selectBtn(props.title)}}>
         {props.title}
         </StyledDropdownBtn>

        <StyledDropdownList $activeBtn={props.activeBtn} $title={props.title} >
        {
        props.options&&props.options.map((option:any,index:number)=>(
             <StyledDropdownListItem key={index}>
             {option}
             </StyledDropdownListItem>
         ))
        }
        </StyledDropdownList>
    </StyledDropdown>
    
    </>
  )
}

export default TitleDropDown;