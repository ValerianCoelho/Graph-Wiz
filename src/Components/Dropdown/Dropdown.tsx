import {useState,useRef} from "react";
import Theme from "../../Theme";
import DropdownButton from "../../Dropdown Components/Dropdown Button/DropDownButton";
import DropdownList from "../../Dropdown Components/Dropdown List/DropDownList";

 function Dropdown(props:any) {

    /* 
        Each drop down component needs a title and options prop
    */


    const style: string = `
    .drop-down{
        display:flex;
        position:relative;
        flex-direction:column;
        justify-content:center;
        background-color:${Theme.bgColor};
        font: inherit;
        border-style:none;    
        width:${props.width===undefined?50:props.width}px;
    }
    `
    

  return (
    <>
    <style>{style}</style>
    <div className="drop-down">
        
        <DropdownButton 
        title={props.title}
        />

        <DropdownList 
        options={props.options}
        offset="30" 
        width="100"
        title={props.title}
        />
    </div>
    
    </>
  )
}

export default Dropdown;