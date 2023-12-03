import Path from "../Path/Path";
import { useState, useEffect } from 'react'
import { connect } from "react-redux";

function PseudoPath(props: any) {
  const [x1, setX1] = useState(props.coords.x);
  const [y1, setY1] = useState(props.coords.y);

  useEffect(()=>{
    setX1(props.coords.x) // from redux store
    setY1(props.coords.y) // from redux store
    console.log(x1, y1);
  }, [props.coords])

  return (
    <>
      <Path 
        x1={x1.toString()} // set to pos of node that created path (from redux store)
        y1={y1.toString()} // set to pos of node that created path (from redux store)
        x2={props.x2.toString()} // come from pointer position in viewport (props from parent)
        y2={props.y2.toString()} // come from pointer position in viewport (props from parent)
        ax1={props.ax1} // for quadratic bezier (props from parent)
        ay1={props.ay1} // for quadratic bezier (props from parent)
        ax2={props.ax2} // for cubic bezier (props from parent)
        ay2={props.ay2} // for cubic bezier (props from parent)
      />
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {
    coords: state.globalFlags.pseudoPathStartCoords,
  }
}

export default connect(
  mapStateToProps
)(PseudoPath)