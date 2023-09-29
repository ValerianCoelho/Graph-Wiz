import Theme from "../../Theme";
import DropdownButton from "../../Dropdown Components/Dropdown Button/DropdownButton";
import DropdownList from "../../Dropdown Components/Dropdown List/DropdownList";


 function Dropdown(props:any) {

    /* 
        Each drop down component needs a title and options prop
    */
  
    

  return (
    <>
    <div className="drop-down" style={{width:`${props.width===undefined?"50px":props.width+"px"}`}}>
        
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