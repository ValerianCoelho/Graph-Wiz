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
const StyledDropdownList = styled.div`
    flex-direction:column;
    position:absolute;
    border:solid #6A6A9F 1px;
    z-index: -1;
    display: block;
    width:200px;
    top:30px;
    border-radius:5px;
    overflow: hidden;
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.2s ease-out;
    &.reveal{
        transform: translateY(0);
        opacity: 1;
        z-index: 10;
    }
`
const StyledDropdownListItem = styled.div`
    display:flex;
    cursor: pointer;
    font-family: sans-serif;
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
    &:hover{
        background-color: #0e0e1c;
    }
`

function TitleDropDown(props:any) {

 const isSelected :boolean=(props.activeBtn==props.title)?true:false;
  
  return (
    <>
    <StyledDropdown>

         <StyledDropdownBtn onClick={()=>{isSelected?props.selectBtn(""):props.selectBtn(props.title)}}>
         {props.title}
         </StyledDropdownBtn>

        <StyledDropdownList className={isSelected?"reveal":""} >
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