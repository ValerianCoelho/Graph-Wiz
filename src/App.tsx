import TitleBar from './Components/Title Bar/TitleBar.tsx'
import ToolBar from './Components/Tool Bar/ToolBar.tsx'
import Viewport from './Components/Viewport/Viewport.tsx'
import Workspace from './Components/Workspace/Workspace.tsx'
import TaskBar from './Components/Task Bar/TaskBar.tsx'

function App() {
  return (
    <>
      <TitleBar/>
      <ToolBar/>
      <Viewport/>
      <Workspace/>
      <TaskBar/>
    </>
  )
}

export default App;
