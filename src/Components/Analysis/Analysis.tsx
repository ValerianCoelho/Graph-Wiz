import PropertyLabel from "../../Widget Components/Property Label/PropertyDisplay.tsx";
import { Divider } from "@mui/material";
import { algorithms } from "./constants.ts";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import {
  Collapse,
  IconButton,
  List,
  Typography,
  Stack,
  ListItemButton,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import React, { useState } from "react";

function Analysis() {
  const [open, setOpen] = useState(-1);
  return (
    <List sx={{ backgroundColor: "white", overflow: "auto" }}>
      <Stack spacing={1} p={1.5}>
        <Typography variant="h6">Graph Properties</Typography>
        <PropertyLabel property="Density" value="5/8" />
        <PropertyLabel property="Isolated Nodes" value="0" />
        <PropertyLabel property="Self-Loop" value="0" />
        <PropertyLabel property="Regions" value="3" />
        <PropertyLabel property="Planar" value="True" />
        <PropertyLabel property="Eulerian" value="False" />
        <PropertyLabel property="Hamiltonian" value="True" />
      </Stack>
      <Divider />
      <Typography variant="h6" p={1.5}>Graph Algorithms</Typography>
      <Divider />
      {algorithms.map(({ title, names }, index) => (
        <React.Fragment key={index}>
          {index != 0 && <Divider />}
          <ListItemButton
            sx={{ padding: 0 }}
            onClick={() => {
              setOpen(open === index ? -1 : index);
            }}
            selected={open == index}
          >
            <Stack direction={"row"} alignItems={"center"}>
              <IconButton>
                {open == index ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
              </IconButton>
              <Typography>{title}</Typography>
            </Stack>
          </ListItemButton>
          <Collapse in={open == index} timeout="auto" unmountOnExit>
            <List>
              {names.map((name: any) => (
                <ListItemButton key={name}>
                  <ArrowRightIcon color="primary" />
                  <Typography>{name}</Typography>
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
}

export default Analysis;
