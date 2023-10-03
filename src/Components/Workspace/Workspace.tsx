import Theme from '../../Theme.tsx'

function Workspace() {
  const styles: string = `
    .workspace__body {
      background-color: ${Theme.pannelColor};
    }
  `
  return (
    <>
      <style> {styles} </style>
      <div className="workspace__body">
        <div>Workspace</div>
      </div>
    </>
  )
}
  
export default Workspace;