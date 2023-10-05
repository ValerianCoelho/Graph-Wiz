import TitleBar from './Components/Title Bar/TitleBar.tsx'
import ToolBar from './Components/Tool Bar/ToolBar.tsx'
import Viewport from './Components/Viewport/Viewport.tsx'
import Workspace from './Components/Workspace/Workspace.tsx'
import TaskBar from './Components/Task Bar/TaskBar.tsx'
import Theme from './Theme.tsx'
import styled from 'styled-components'

const StyledApp = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 4% auto 20%;
  grid-template-rows: 5% auto 5%;
  gap: 1px;
  background-color: ${Theme.fgColor};
  color: ${Theme.fgColor};
`

function App() {
  return (
    <StyledApp>
      <TitleBar/>
      <ToolBar/>
      <Viewport/>
      <Workspace/>
      <TaskBar/>
    </StyledApp>
  )
}

export default App;
