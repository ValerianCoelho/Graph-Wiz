import {useState,useRef} from "react";
import Theme from "../../Theme";
import DropDownButton from "../../Drop Down Components/Drop Down Button/DropDownButton";
import DropDownList from "../../Drop Down Components/Drop Down List/DropDownList";

 function DropDown(props:any) {

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
        
        <DropDownButton 
        title={props.title}
        />

        <DropDownList 
        options={props.options}
        offset="30" 
        width="100"
        title={props.title}
        />
    </div>
    
    </>
  )
}

export default DropDown;