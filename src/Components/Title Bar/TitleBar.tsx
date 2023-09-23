import Theme from '../../Theme.tsx'

function TitleBar() {
  const styles: string = `
    .title-bar__body {
      background-color: ${Theme.bgColor};
      grid-column:  1 / span 3;
    }
  `
  return (
    <>
      <style> {styles} </style>
      <div className="title-bar__body">
        <div>Title Bar</div>
      </div>
    </>
  )
}
  
export default TitleBar;