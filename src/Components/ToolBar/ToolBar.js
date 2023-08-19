import React, { useState } from "react";
import theme from "../theme"
import {SvgMove, SvgNode, SvgPencil, SvgWave ,SvgSelect} from "./svgs/icons"

function ToolBar() {
  let [focussed,setFocussed] = useState("");

  const styles = {
    body: {
      backgroundColor: theme.background,
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      paddingTop:"10px",
      // justifyContent:"space-between",
      rowGap:"10px"
    },

    svgContainer:{
      textAlign:"center",
      width:"100%",
      marginBottom:"20px",
      
    },

  }
  return (
    <div style={styles.body}>
      <div styles={styles.svgContainer} onMouseOver={()=>{setFocussed("move")}} onMouseOut={()=>{setFocussed("")}} >
        <SvgMove focus={focussed} />
      </div>
      <div styles={styles.svgContainer} onMouseOver={()=>{setFocussed("select")}} onMouseOut={()=>{setFocussed("")}}>
        <SvgSelect focus={focussed} />
      </div>
      <div styles={styles.svgContainer} onMouseOver={()=>{setFocussed("pencil")}} onMouseOut={()=>{setFocussed("")}}>
        <SvgPencil focus={focussed} />
      </div>
      <div styles={styles.svgContainer} onMouseOver={()=>{setFocussed("wave")}} onMouseOut={()=>{setFocussed("")}}>
       <SvgWave focus={focussed} /> 
      </div>
      <div styles={styles.svgContainer} onMouseOver={()=>{setFocussed("node")}} onMouseOut={()=>{setFocussed("")}}>
        <SvgNode focus={focussed} />
      </div>
    </div>
  )
}

export default ToolBar;