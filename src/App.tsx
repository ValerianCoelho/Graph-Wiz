import TitleBar from './Components/Title Bar/TitleBar.tsx'
import ToolBar from './Components/Tool Bar/ToolBar.tsx'
import Viewport from './Components/Viewport/Viewport.tsx'
import Workspace from './Components/Workspace/Workspace.tsx'
import TaskBar from './Components/Task Bar/TaskBar.tsx'
import Theme from './Theme.tsx'

function App() {
  const styles: string = `
    .app-body {
      height: 100vh;
      display: grid;
      grid-template-columns: 4% auto 20%;
      grid-template-rows: 5% auto 5%;
      gap: 1px;
      background-color: ${Theme.fgColor};
      color: ${Theme.fgColor};
    }
  `
  return (
    <div className='app-body'>
      <style> {styles} </style>
      <TitleBar/>
      <ToolBar/>
      <Viewport/>
      <Workspace/>
      <TaskBar/>
    </div>
  )
}

export default App;
