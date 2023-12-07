import Theme from '../../Theme.tsx'
import styled from 'styled-components';
import { navigationData } from './NavigationData.tsx';
import NavigationDropdown from '../../Widget Components/Navigation Dropdown/NavigationDropdown.tsx';

const StyledTitleBar = styled.div`
  background-color: ${Theme.bgColor};
  grid-column:  1 / span 3;
  display:flex;
  flex-direction:row;
  align-items:center;
`

function TitleBar() { 
  return (
    <>
      <StyledTitleBar className="title-bar__body">
        <NavigationDropdown navigationData={navigationData}/>
      </StyledTitleBar>
    </>
  )
}
  
export default TitleBar;