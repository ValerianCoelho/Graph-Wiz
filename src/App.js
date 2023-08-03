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
      display: 'grid',
      gridTemplateColumns: '3.6% auto 19.8%',
      gridTemplateRows: '6.75% auto 5.2%',
      minHeight: '100vh',
      color: theme.accent,
      fontFamily: 'open sans',
      fontSize: '1.6rem',
      gap: '1px',
      backgroundColor: theme.accent
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