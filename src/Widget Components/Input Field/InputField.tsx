import './InputField.css'

function InputField(props: any) {
  return (
    <input className='input-field' type="text" placeholder={props.placeholderText} onChange={props.handleInputChange}/>
  )
}
export default InputField;