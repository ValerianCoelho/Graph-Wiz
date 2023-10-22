import TitleBar from './Components/Title Bar/TitleBar.tsx'
import Editor from './Components/Editor/Editor.tsx'
import Viewport from './Components/Viewport/Viewport.tsx'
import Analysis from './Components/Analysis/Analysis.tsx'
import TaskBar from './Components/Task Bar/TaskBar.tsx'
import Theme from './Theme.tsx'
import styled from 'styled-components'

const StyledApp = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 15% auto 15%;
  grid-template-rows: 5% auto 5%;
  gap: 1px;
  background-color: ${Theme.fgColor};
  color: ${Theme.fgColor};
`

function App() {
  return (
    <StyledApp>
      <TitleBar/>
      <Editor/>
      <Viewport/>
      <Analysis/>
      <TaskBar/>
    </StyledApp>
  )
}

export default App;
