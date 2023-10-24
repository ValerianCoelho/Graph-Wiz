import Theme from "../../Theme";

type PathProps = {
  x1: string,
  y1: string,
  x2: string,
  y2: string
}

function Path({x1, y1, x2, y2}: PathProps) {
  return (
    <svg width="200000" height="200000" xmlns="http://www.w3.org/2000/svg">
      <path d={`M${x1},${y1} L${x2},${y2}`} stroke={Theme.pathStroke} strokeWidth="2" fill="transparent" />
    </svg>
  )
}

export default Path;