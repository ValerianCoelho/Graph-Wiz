import Theme from '../../Theme.tsx'
import styled from 'styled-components';
import DropdownSelect from '../Dropdown Select/DropdownSelect.tsx';

const StyledWorkspace = styled.div`
  background-color: ${Theme.pannelColor};
  z-index:1;
`

function Workspace() {
  return (
    <StyledWorkspace >
      <div>Workspace</div>
      <DropdownSelect optionList={["Valerian", "Conrad", "Ethan", "Rayyan"]}/>
    </StyledWorkspace>
  )
}
  
export default Workspace;