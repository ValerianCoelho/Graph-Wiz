
import DropdownItem from "../Dropdown Item/DropdownItem";


export default function DropdownList(props:any) {

/*
    Each drop down list requires a title offset and options prop
*/
  

  return (
    <>
    <div 
        className={`drop-down__list`} 
        style={{
                width:`${props.width}px`,
                top:`${props.offset}px`,
                display:`none`
                }}
    >

        {props.options&&props.options.map((option:any, index: any)=>(
            <DropdownItem itemName={option} key={index}/>
        ))}

    </div>
    </>
  )
}
