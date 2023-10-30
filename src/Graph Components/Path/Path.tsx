import Theme from "../../Theme";
import { useEffect, useRef } from 'react'

type PathProps = {
  x1: string,
  y1: string,
  x2: string,
  y2: string
}

function Path({x1, y1, x2, y2, ...props}:any) {
  const path = useRef<SVGSVGElement>(null);

  useEffect(()=> {
    const handleDblClick = ()=> {
      props.onDblClick(props.id)
    }
    path.current?.addEventListener('dblclick', handleDblClick);

    return ()=> {
      path.current?.removeEventListener('dblclick', handleDblClick);
    }
  }, [])

  return (
    <svg ref={path} width="1" height="1" xmlns="http://www.w3.org/2000/svg"
      style={{"overflow":"visible","position":"absolute","zIndex":"-1"}}
    >
      <path d={`M${x1},${y1} L${x2},${y2}`} stroke={Theme.pathStroke} strokeWidth="2" fill="transparent" />
    </svg>
  )
}

export default Path;