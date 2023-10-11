import Theme from '../../Theme.tsx'
import styled from 'styled-components';
import DropdownSelect from '../Dropdown Select/DropdownSelect.tsx';
import PropertyLabel from '../Property Label/PropertyDisplay.tsx';
import InputField from '../Input Field/InputField.tsx';
import Button from '../Button/Button.tsx';
import TextField from '../Text Field/TextField.tsx';

const StyledWorkspace = styled.div`
  background-color: ${Theme.pannelColor};
  z-index:1;
  padding: 10px;
`

function Workspace() {
  return (
    <StyledWorkspace >
      <DropdownSelect optionList={["Dropdown 1", "Dropdown 2", "Dropdown 3", "Dropdown 4"]}/>
      <PropertyLabel property={'Property'} value={'Value'}/>
      <InputField handleInputChange={(e: any)=>{console.log(e.target.value)}} placeholderText="Input Field"/>
      <Button text="Button" handleClick={()=>{console.log('hello')}}/>
      <TextField text="Text Field"/>
    </StyledWorkspace>
  )
}
  
export default Workspace;