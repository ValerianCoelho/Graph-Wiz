import { useContext } from "react";
import DropdownItem from "../Dropdown Item/DropdownItem";
import { titleBarContext } from "../../Contexts/titleBarContext";

export default function DropdownList(props:any) {

/*
    Each drop down list requires a title offset and options prop
*/
  const {isActiveDropdown} = useContext(titleBarContext);

    if(props.title=="File"){

        console.log(Object(isActiveDropdown)[props.title])
    }

  return (
    <>
    <div 
        className={`drop-down__list`} 
        style={{
                width:`${props.width}px`,
                top:`${props.offset}px`,
                display:`${Object(isActiveDropdown)[props.title]?"block":"none"}`
                }}
    >

        {props.options&&props.options.map((option:any, index: any)=>(
            <DropdownItem itemName={option} key={index}/>
        ))}

    </div>
    </>
  )
}
