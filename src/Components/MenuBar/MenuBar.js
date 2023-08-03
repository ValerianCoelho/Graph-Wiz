import React from "react";
import theme from "../theme";
import Logo from './Logo.svg'

function MenuBar() {
  const styles = {
    body: {
      display: 'flex',
      alignItems: 'center',
      gap: '2.4rem',
      fontSize: '2rem',
      backgroundColor: theme.background,
      gridColumn: '1 / span 3'
    }
  }

  return (
    <div style={styles.body}>
      <img src={Logo}></img>
      <div style={styles.menu_title}>File</div>
      <div style={styles.menu_title}>Edit</div>
      <div style={styles.menu_title}>View</div>
      <div style={styles.menu_title}>Help</div>
    </div>
  )
}

export default MenuBar;