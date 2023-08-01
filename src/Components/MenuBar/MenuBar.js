import React from "react";

function MenuBar() {
  return (
    <React.Fragment>
      <img src="./Logo.svg"></img>
      <div className="menu-title">File</div>
      <div className="menu-title">Edit</div>
      <div className="menu-title">View</div>
      <div className="menu-title">Help</div>
    </React.Fragment>
  )
}

export default MenuBar;