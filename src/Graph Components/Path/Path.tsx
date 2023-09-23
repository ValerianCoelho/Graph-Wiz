import Theme from "../../Theme";

function Path() {
  return (
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <path d="M10,10 L50,50" stroke={Theme.pathStroke} strokeWidth="2" fill="transparent" />
    </svg>
  )
}

export default Path;