import './InputField.css'

function InputField(props: any) {
  return (
    <input onChange={(e)=>props.onChange(e.target.value)} className='input-field' type="text" placeholder={props.placeholderText}/>
  )
}
export default InputField;