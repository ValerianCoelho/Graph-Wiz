import Theme from '../../Theme.tsx'
import styled from 'styled-components';
import DropdownSelect from '../Dropdown Select/DropdownSelect.tsx';
import PropertyLabel from '../Property Label/PropertyDisplay.tsx';

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
    </StyledWorkspace>
  )
}
  
export default Workspace;