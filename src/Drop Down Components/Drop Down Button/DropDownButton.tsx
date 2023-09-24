
export default function DropDownButton(props:any) {

    const style:string =`
    .drop-down__btn{
        background-color:transparent;
        border-style:none;
        font:1rem;
        color:white;
        width:${props.width===undefined?50:props.width}px;
        height:${props.height===undefined?20:props.height}px;
    }
    `

    return (
        <>
        <style>{style}</style>
        <button className="drop-down__btn">
        {props.title}
        </button>
        </>
  )
}
