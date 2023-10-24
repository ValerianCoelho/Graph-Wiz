import Path from "../Path/Path";
import { useState, useEffect } from 'react'

function PseudoPath(props: any) {
  const [x1, setX1] = useState(10);
  const [y1, setY1] = useState(20);
  const [x2, setX2] = useState(400);
  const [y2, setY2] = useState(300);

  // useEffect(()=>{
  //   window.addEventListener('mousemove', (e)=> {
  //     console.log(e.clientX, e.clientY);
  //     setX2(e.clientX)
  //     setY2(e.clientY)
  //   })
  // }, [])

  return (
    <>
      <Path x1={x1.toString()} y1={y1.toString()} x2={props.x2.toString()} y2={props.y2.toString()}/>
    </>
  )
}

export default PseudoPath;