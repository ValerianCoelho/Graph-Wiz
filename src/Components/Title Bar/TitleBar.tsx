import Theme from '../../Theme.tsx'
import DropDown from '../Drop Down/DropDown.tsx';

function TitleBar() {
  /*
  
    functionality still being worked on.... 
    
  */
  const styles: string = `
    .title-bar__body {
      background-color: ${Theme.bgColor};
      grid-column:  1 / span 3;
      display:flex;
      flex-direction:row;
      align-items:center;
      
    }
  `
  return (
    <>
      <style> {styles} </style>
      <div className="title-bar__body">
        <div>Title Bar</div>
        <DropDown
        title="File" 
        options={["Something","something2","Something3","Something4"]}
        />
        <DropDown
        title="Edit"
        options={["something","something"]}
        />
        <DropDown
        title="View"
        options={["something","something"]}
        />
        <DropDown
        title="Help"
        options={["something","something"]}
        />
      </div>
    </>
  )
}
  
export default TitleBar;