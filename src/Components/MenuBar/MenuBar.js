import React from "react";
import theme from "../theme";
import Logo from './Logo.svg'

function MenuBar() {
  const styles = {
    body: {
      display: 'flex',
      alignItems: 'center',
      gap: '2.0rem',
      fontSize: '2rem',
      backgroundColor: theme.background,
      gridColumn: '1 / span 3',
      // fontFamily:'Open-sans'
    },
    menu_title:{
      
    },
    logo :{
      paddingLeft:"10px"
    }
  }

  return (
    <div style={styles.body}>
      <img src={Logo} alt="Logo" style={styles.logo}></img>
      <div style={styles.menu_title}>File</div>
      <div style={styles.menu_title}>Edit</div>
      <div style={styles.menu_title}>View</div>
      <div style={styles.menu_title}>Help</div>
    </div>
  )
}

export default MenuBar;