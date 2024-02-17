import TitleBar from './Components/Title Bar/TitleBar.tsx'
import Editor from './Components/Editor/Editor.tsx'
import Viewport from './Components/Viewport/Viewport.tsx'
import Analysis from './Components/Analysis/Analysis.tsx'
import TaskBar from './Components/Task Bar/TaskBar.tsx'
import styled from 'styled-components'

const StyledApp = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: minmax(150px,20%) auto minmax(150px,20%);
  grid-template-rows: minmax(5%, 40px) auto minmax(5%, 40px);
  gap: 1px;
  background-color: #c3c3c3;
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
