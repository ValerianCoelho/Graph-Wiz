import Theme from '../../Theme.tsx'
import Dropdown from '../Dropdown/Dropdown.tsx';

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
        <Dropdown
        title="File" 
        options={["Something","something2","Something3","Something4"]}
        />
        <Dropdown
        title="Edit"
        options={["something","something"]}
        />
        <Dropdown
        title="View"
        options={["something","something"]}
        />
        <Dropdown
        title="Help"
        options={["something","something"]}
        />
      </div>
    </>
  )
}
  
export default TitleBar;