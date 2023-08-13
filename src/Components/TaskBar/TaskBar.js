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
      <h4>TaskBar</h4>
    </div>
  )
}

export default TaskBar;