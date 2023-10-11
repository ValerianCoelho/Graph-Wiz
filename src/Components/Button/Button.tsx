import './Button.css'

function Button(props: any) {
  return (
    <>
      <div className='button' onClick={props.handleClick}>{props.text}</div>
    </>
  )
}
export default Button;