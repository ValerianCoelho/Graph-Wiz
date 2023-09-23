import Theme from '../../Theme.tsx'

function ToolBar() {
  const styles: string = `
    .tool-bar__body {
      background-color: ${Theme.bgColor};
    }
  `
  return (
    <>
      <style> {styles} </style>
      <div className="tool-bar__body">
        <div>Tool Bar</div>
      </div>
    </>
  )
}
  
export default ToolBar;