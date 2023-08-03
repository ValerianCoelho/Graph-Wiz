import React from "react";
import theme from "../theme";

function OutputPannel() {
  const styles = {
    body: {
      backgroundColor: theme.foreground,
    }
  }
  return (
    <div style={styles.body}>
      <h1>OutputPannel</h1>
    </div>
  )
}

export default OutputPannel;