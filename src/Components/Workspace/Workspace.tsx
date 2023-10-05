import Theme from '../../Theme.tsx'
import styled from 'styled-components';

const StyledWorkspace = styled.div`
  background-color: ${Theme.pannelColor};
  z-index:1;
`

function Workspace() {
  return (
    <StyledWorkspace >
      <div>Workspace</div>
    </StyledWorkspace>
  )
}
  
export default Workspace;