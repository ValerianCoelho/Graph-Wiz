// import { useState } from 'react';
import Theme from '../../Theme.tsx'
import DropdownMenu from '../Dropdown Menu/DropdownMenu.tsx';

function TitleBar() {
  // const [isActiveDropdown, setIsActiveDropdown] = useState({
  //   "File":false,
  //   "Edit":false,
  //   "View":false,
  //   "Help":false
  // })


 

  const styles: string = `
    .title-bar__body {
      background-color: ${Theme.bgColor};
      grid-column:  1 / span 3;
      display:flex;
      flex-direction:row;
      align-items:center;
      
    }
    .drop-down__btn{
      background-color:transparent;
      border-style:none;
      font:1rem;
      color:white;
    }
    .drop-down__list{
      flex-direction:column;
      position:absolute;
      border:solid ${Theme.fgColor} 1px;
    }
    .drop-down{
      display:flex;
      position:relative;
      flex-direction:column;
      justify-content:center;
      background-color:${Theme.bgColor};
      font: inherit;
      border-style:none;    
    }
    .drop-down__list__item{
      display:flex;
      flex-direction:row;
      justify-content:center;
      align-items:center;
      border-style:none;
      background-color:${Theme.bgColor};
      width:100%;
      color:${Theme.fgColor};
      height:40px;
      text-transform:lowercase;
      z-index:20;
    }
  `
  return (
    <>
    
      <style> {styles} </style>
      <div className="title-bar__body">
        <DropdownMenu
          title="File" 
          options={["Something","something2","Something3","Something4"]}
        />
        <DropdownMenu
          title="Edit"
          options={["something","something"]}
        />
        <DropdownMenu
          title="View"
          options={["something","something"]}
        />
        <DropdownMenu
          title="Help"
          options={["something","something"]}
        />
      </div>
      
    </>
  )
}
  
export default TitleBar;