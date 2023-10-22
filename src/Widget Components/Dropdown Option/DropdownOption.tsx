import { useState } from "react";
import './DropdownOption.css'

function DropdownOption(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="dropdown-options">
        <div className="dropdown-title" onClick={()=>{setIsOpen(!isOpen)}}>{props.title}</div>
        <ul className={`dropdown-options-list ${isOpen ? '' : 'hide'}`}>
            {props.optionList.map((option: any)=>(
            <li className="dropdown-option" key={option} onClick={()=>{console.log(option)}}> {option} </li>
            ))}
        </ul>
    </div>
  )
}

export default DropdownOption;