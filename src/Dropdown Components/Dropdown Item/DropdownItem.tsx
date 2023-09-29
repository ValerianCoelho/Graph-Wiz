import Theme from "../../Theme"

export default function DropdownItem(props:any) {

    /*
        each drop down item requires a itemName as a prop 
    */


  return (
    <>
    <div className="drop-down__list__item">
        {props.itemName}
    </div>
    </>
  )
}
