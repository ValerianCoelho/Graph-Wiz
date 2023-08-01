import React from "react";
import MenuBar from "./Components/MenuBar/MenuBar";
import ToolBar from "./Components/ToolBar/ToolBar";
import ViewPort from "./Components/ViewPort/ViewPort";
import OutputPannel from "./Components/OutputPannel/OutputPannel";
import TaskBar from "./Components/TaskBar/TaskBar";


function App() {
  return (
    <React.Fragment>
      <MenuBar/>
      <ToolBar/>
      <ViewPort/>
      <OutputPannel/>
      <TaskBar/>
    </React.Fragment>
  )
}

export default App;