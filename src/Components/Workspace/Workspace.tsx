import Theme from '../../Theme.tsx'
import styled from 'styled-components';
import Dropdown from '../Dropdown/Dropdown.tsx';

const StyledWorkspace = styled.div`
  background-color: ${Theme.pannelColor};
  z-index:1;
`

function Workspace() {
  return (
    <StyledWorkspace >
      <div>Workspace</div>
      <Dropdown/>
    </StyledWorkspace>
  )
}
  
export default Workspace;