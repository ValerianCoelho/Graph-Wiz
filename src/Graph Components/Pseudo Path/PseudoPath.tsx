import Path from "../Path/Path";
import { useState, useEffect } from 'react'

function PseudoPath(props: any) {
  const [x1, setX1] = useState(10);
  const [y1, setY1] = useState(20);

  return (
    <>
      <Path 
        x1={x1.toString()} // set to pos of node that created path
        y1={y1.toString()} // set to pos of node that created path
        x2={props.x2.toString()} // come from pointer position in viewport
        y2={props.y2.toString()} // come from pointer position in viewport
      />
    </>
  )
}

export default PseudoPath;