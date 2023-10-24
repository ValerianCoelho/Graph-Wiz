import Path from "../Path/Path";
import { useState, useEffect } from 'react'

function PseudoPath() {
  const [x1, setX1] = useState(0);
  const [y1, setY1] = useState(0);
  const [x2, setX2] = useState(0);
  const [y2, setY2] = useState(0);

  useEffect(()=>{
    console.log('hello')
  }, [])

  return (
    <>
      <Path x1={x1.toString()} y1={y1.toString()} x2={x2.toString()} y2={y2.toString()}/>
    </>
  )
}

export default PseudoPath;