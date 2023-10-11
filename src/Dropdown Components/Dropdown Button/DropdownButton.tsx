export default function DropdownButton(props:any) {



    

    function handleClick(){
        
    }



    return (
        <>
        <button className="drop-down__btn" onClick={handleClick} style={{width:props.width===undefined?"50px":`${props.width}px`,height:props.height===undefined?"20px":`${props.height}px`}}>
        {props.title}
        </button>
        </>
  )
}
