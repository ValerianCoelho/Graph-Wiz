import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styled from "styled-components";
import { navigationData } from "./constants";
import {
  Box,
  Divider,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const StyledTitleBar = styled.div`
  background-color: white;
  grid-column: 1 / span 3;
  z-index: 2;
`;

function TitleBar() {
  const [anchorEl, setAnchorEl] = React.useState<{
    [key: number]: HTMLElement | null;
  }>({});

  const handleClick = (event: any, index: any) => {
    setAnchorEl({[index]: event.currentTarget });
  };
  
  React.useEffect(()=>{
    
    console.log(anchorEl)
  }, [anchorEl])

  const handleHover = (event: any, index: any) => {
    console.log("Hovered")
    if(Object.keys(anchorEl).length == 1) {
      setAnchorEl({[index]: event.currentTarget });
    }
  }

  const handleClose = (index: any) => {
    setAnchorEl({});
  };

  return (
    <>
      <StyledTitleBar className="title-bar__body">
        {navigationData.map(({ title, children }, index) => (
          <React.Fragment key={index}>
            <Button 
              onMouseOver={(event)=>handleHover(event, index)} 
              onClick={(event) => handleClick(event, index)}
              sx={{zIndex: 2}}
            >
              {title}
            </Button>
            <Menu
              anchorEl={anchorEl[index]}
              open={Boolean(anchorEl[index])}
              onClose={() => handleClose(index)}
              disablePortal
              sx={{
                zIndex: 1,
              }}
            >
              {children.map((section, sectionIndex) => (
                <Box key={sectionIndex}>
                  {sectionIndex != 0 && <Divider />}
                  <List>
                    {section.map(
                      ({ option, hotkey, icon, children }: any, optionIndex) => (
                        <React.Fragment key={optionIndex}>
                          <MenuItem onClick={() => handleClose(index)}>
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText sx={{ width: 130 }}>
                              {option}
                            </ListItemText>
                            <Typography variant="body2" color="text.secondary">
                              {hotkey}
                            </Typography>
                            {/* { children && <Menu open={true}></Menu> } */}
                          </MenuItem>
                        </React.Fragment>
                      )
                    )}
                  </List>
                </Box>
              ))}
            </Menu>
          </React.Fragment>
        ))}
      </StyledTitleBar>
    </>
  );
}

export default TitleBar;
