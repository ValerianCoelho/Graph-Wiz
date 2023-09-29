import { titleBarContext } from "../../Contexts/titleBarContext";
import { useContext } from "react";
export default function DropdownButton(props:any) {

    const {setIsActiveDropdown} = useContext(titleBarContext);

    

    function handleClick(){
        setIsActiveDropdown((prev:any)=>{
            console.log(prev);
            prev[props.title]=true;
            let key:string;
            for(key of Object.keys(prev)){
                if(key!=props.title){
                    prev[key]=false;
                }
            }   
            return prev;
        })
    }



    return (
        <>
        <button className="drop-down__btn" onClick={handleClick} style={{width:props.width===undefined?"50px":`${props.width}px`,height:props.height===undefined?"20px":`${props.height}px`}}>
        {props.title}
        </button>
        </>
  )
}
