import React from "react";
import MenuBar from "./Components/MenuBar/MenuBar";
import ToolBar from "./Components/ToolBar/ToolBar";
import ViewPort from "./Components/ViewPort/ViewPort";
import OutputPannel from "./Components/OutputPannel/OutputPannel";
import TaskBar from "./Components/TaskBar/TaskBar";
import theme from "./Components/theme";


function App() {
  const styles = {
    body: {
      color: theme.accent,
      fontFamily: 'arial'
    }
  }
  return (
    <div style={styles.body}>
      <MenuBar/>
      <ToolBar/>
      <ViewPort/>
      <OutputPannel/>
      <TaskBar/>
    </div>
  )
}

export default App;