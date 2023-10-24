import "./TitleDropDown.css"
function TitleDropDown(props:any) {

    /* 
        Each drop down component needs a title and options prop
    */

  
  return (
    <>
    <div className="drop-down" style={{width:`${props.width===undefined?"50px":props.width+"px"}`}}>

         <button className="drop-down__btn"  style={{width:"50px",height:"20px"}} onClick={()=>{(props.activeBtn==props.title)?props.selectBtn(""):props.selectBtn(props.title)}}>
         {props.title}
         </button>

        <div className={`drop-down__list`} style={{"display":`${props.activeBtn==props.title?"block":"none"}`}}>
        {
        props.options&&props.options.map((option:any,index:number)=>(
             <div key={index} className="drop-down__list__item">
             {option}
             </div>
         ))
        }

     </div>
    </div>
    
    </>
  )
}

export default TitleDropDown;