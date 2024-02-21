import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styled from "styled-components";
import { navigationData } from "./constants";
import { ContentCut } from "@mui/icons-material";
import {
  Divider,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const StyledTitleBar = styled.div`
  background-color: white;
  grid-column: 1 / span 3;
`;

function TitleBar() {
  const [anchorEl, setAnchorEl] = React.useState<{
    [key: number]: HTMLElement | null;
  }>({});

  const handleClick = (event: any, index: any) => {
    setAnchorEl({ ...anchorEl, [index]: event.currentTarget });
  };

  const handleClose = (index: any) => {
    setAnchorEl({ ...anchorEl, [index]: null });
  };

  return (
    <>
      <StyledTitleBar className="title-bar__body">
        {navigationData.map(({ title, children }, index) => (
          <React.Fragment key={index}>
            <Button onClick={(event) => handleClick(event, index)}>
              {title}
            </Button>
            <Menu
              anchorEl={anchorEl[index]}
              open={Boolean(anchorEl[index])}
              onClose={() => handleClose(index)}
            >
              {children.map((section, sectionIndex) => (
                <List key={sectionIndex} sx={{m: 0, p: 0}}>
                  {section.map(({ option, hotkey, icon }: any, optionIndex) => (
                    <React.Fragment key={optionIndex}>
                      {optionIndex != 0 && <Divider />}
                      <MenuItem onClick={() => handleClose(index)}>
                        <ListItemIcon>
                          {icon}
                        </ListItemIcon>
                        <ListItemText sx={{width: 130}}>{option}</ListItemText>
                        <Typography variant="body2" color="text.secondary">
                          {hotkey}
                        </Typography>
                      </MenuItem>
                    </React.Fragment>
                  ))}
                </List>
              ))}
            </Menu>
          </React.Fragment>
        ))}
      </StyledTitleBar>
    </>
  );
}

export default TitleBar;
