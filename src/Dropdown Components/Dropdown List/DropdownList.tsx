import Theme from "../../Theme";
import DropdownItem from "../Dropdown Item/DropdownItem";

export default function DropdownList(props:any) {

/*
    Each drop down list requires a title offset and options prop
*/

    const style:string=`
        .drop-down__list{
            display:none;
            flex-direction:column;
            position:absolute;
            width:${props.width}px;
            top:${props.offset}px;
            border:solid ${Theme.fgColor} 1px;
        }
        .drop-down__${props.title}-list{


        }
    `
  return (
    <>
    <style>{style}</style>
    <div className={`drop-down__list drop-down__${props.title}-list`}>
        {props.options&&props.options.map((option:any, index: any)=>(
            <DropdownItem itemName={option} key={index}/>
        ))}
    </div>
    </>
  )
}
