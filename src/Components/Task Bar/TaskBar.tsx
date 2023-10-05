import styled from 'styled-components';
import Theme from '../../Theme.tsx';

const StyledTaskBar = styled.div`
  background-color: ${Theme.bgColor};
  grid-column: 1 / span 3;
  z-index: 1;
`;

function TaskBar() {
  return (
    <StyledTaskBar>
      <div>Task Bar</div>
    </StyledTaskBar>
  );
}

export default TaskBar;
