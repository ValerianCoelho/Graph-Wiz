import Theme from '../../Theme.tsx'
import styled from 'styled-components';
import DropdownSelect from '../Dropdown Select/DropdownSelect.tsx';
import PropertyLabel from '../Property Label/PropertyDisplay.tsx';
import InputField from '../Input Field/InputField.tsx';
import Button from '../Button/Button.tsx';

const StyledWorkspace = styled.div`
  background-color: ${Theme.pannelColor};
  z-index:1;
  padding: 10px;
`

function Workspace() {
  return (
    <StyledWorkspace >
      <div>Workspace</div>
      <DropdownSelect optionList={["Valerian", "Conrad", "Ethan", "Rayyan"]}/>
      <PropertyLabel property={'Density'} value={'5/8'}/>
      <InputField handleInputChange={(e: any)=>{console.log(e.target.value)}} placeholderText="Enter Something"/>
      <Button handleClick={()=>{console.log('hello')}}/>
    </StyledWorkspace>
  )
}
  
export default Workspace;