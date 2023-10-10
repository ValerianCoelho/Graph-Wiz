import { useState } from "react";
import './DropdownSelect.css'

function DropdownSelect(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(props.optionList[0]);
  return (
    <>
      <div className="selected-option" onClick={()=>{setIsOpen(!isOpen)}}> {selectedOption} </div>
      <ul className={`option-list ${isOpen ? '' : 'hide'}`}>
        {props.optionList.map((option: any)=>(
          <li key={option}> {option} </li>
        ))}
      </ul>
    </>
  )
}

export default DropdownSelect;