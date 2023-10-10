import { useState } from "react";
import './DropdownSelect.css'

function DropdownSelect(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(props.optionList[0]);
  return (
    <div className="dropdown-select">
      <div className="selected-option" onClick={()=>{setIsOpen(!isOpen)}}> {selectedOption} </div>
      <ul className={`option-list ${isOpen ? '' : 'hide'}`}>
        {props.optionList.map((option: any)=>(
          <li className="option" key={option} onClick={()=>{
            setSelectedOption(option);
            setIsOpen(!isOpen);
          }}> {option} </li>
        ))}
      </ul>
    </div>
  )
}

export default DropdownSelect;