import React from "react";
import theme from "../theme";
import Logo from './Logo.svg'

function MenuBar() {
  const styles = {
    body: {
      display: 'flex',
      gap: '2.4rem',
      fontSize: '2rem',
      backgroundColor: theme.background,
      border: `.1rem solid ${theme.accent}`
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