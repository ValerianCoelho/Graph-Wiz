import React from "react";
import theme from "../theme"

function ToolBar() {
  const styles = {
    body: {
      backgroundColor: theme.background,
    }
  }
  return (
    <div style={styles.body}>
      <div>T</div>
    </div>
  )
}

export default ToolBar;