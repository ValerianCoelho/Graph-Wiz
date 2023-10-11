import './Button.css'

function Button(props: any) {
  return (
    <>
      <div className='button' onClick={props.handleClick}>ADD</div>
    </>
  )
}
export default Button;