import Theme from "../../Theme"

export default function DropdownItem(props:any) {

    /*
        each drop down item requires a itemName as a prop 
    */

    const style:string =`
        
        .drop-down__list__item{
            display:flex;
            flex-direction:row;
            justify-content:center;
            align-items:center;
            border-style:none;
            background-color:${Theme.bgColor};
            width:100%;
            color:${Theme.fgColor};
            height:40px;
            text-transform:lowercase;
            z-index:20;
        }

    `

  return (
    <>
    <style>{style}</style>
    <div className="drop-down__list__item">
        {props.itemName}
    </div>
    </>
  )
}
