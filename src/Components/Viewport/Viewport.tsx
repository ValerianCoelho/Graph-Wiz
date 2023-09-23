import Theme from '../../Theme.tsx'

function Viewport() {
  const styles: string = `
    .viewport__body {
      background-color: ${Theme.bgColor};
    }
  `
  return (
    <>
      <style> {styles} </style>
      <div className="viewport__body">
        <div>Viewport</div>
      </div>
    </>
  )
}
  
export default Viewport;