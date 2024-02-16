import TitleBar from './Components/Title Bar/TitleBar.tsx'
import Editor from './Components/Editor/Editor.tsx'
import Viewport from './Components/Viewport/Viewport.tsx'
import Analysis from './Components/Analysis/Analysis.tsx'
import TaskBar from './Components/Task Bar/TaskBar.tsx'
import styled from 'styled-components'

const StyledApp = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: minmax(150px,15%) auto minmax(150px,15%);
  grid-template-rows: minmax(5%, 40px) auto 5%;
  gap: 1px;
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
