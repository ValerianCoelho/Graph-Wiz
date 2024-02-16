import styled from "styled-components";
import Theme from "../../Theme.tsx";
import { Stack, Typography } from "@mui/material";

const StyledTaskBar = styled.div`
  grid-column: 1 / span 3;
  z-index: 1;
  display: flex;
  align-items: center;
  background-color: white;
`;

function TaskBar() {
  return (
    <StyledTaskBar>
      <Stack direction={'row'} flex={1} px={1}>
        <Typography flex={1}>Graph Wiz</Typography>
        <Typography>V.1.0</Typography>
      </Stack>
    </StyledTaskBar>
  );
}

export default TaskBar;
