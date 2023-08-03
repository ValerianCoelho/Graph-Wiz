import React from "react";
import theme from "../theme";

function TaskBar() {
  const styles = {
    body: {
      backgroundColor: theme.background,
      gridColumn: '1 / span 3'
    }
  }
  return (
    <div style={styles.body}>
      <h1>TaskBar</h1>
    </div>
  )
}

export default TaskBar;