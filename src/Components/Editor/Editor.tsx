import { connect } from "react-redux";
import { addNode } from "../../Redux/index.tsx";
import styled from "styled-components";
import Theme from "../../Theme.tsx";
import { useEffect, useState } from "react";
import { setWeightOption } from "../../Redux/index.tsx";
import { setDirectedOption } from "../../Redux/index.tsx";
import { updateWeight } from "../../Redux/index.tsx";
import { changeDirection } from "../../Redux/index.tsx";
import { setInstantNodeCreationMode } from "../../Redux/index.tsx";
import { incrementLabel } from "../../Redux/index.tsx";
import { updateCustomNodeLabel } from "../../Redux/index.tsx";
import { convert } from "../../utils/Conversion.ts";
import {
  MenuItem,
  Typography,
  TextField,
  Stack,
  Button,
  List,
  Divider,
  IconButton,
} from "@mui/material";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

const StyledLeftDirectedEdgeBtn = styled.svg<{ $selected: boolean }>`
  color: ${Theme.fgColor};
  background-color: ${(props) => (props.$selected ? "#272753" : Theme.bgColor)};
  box-sizing: content-box;
  padding: 5px;
  border: 1px solid ${Theme.nodeBorderColor};
  border-radius: 5px;
  &:hover {
    background-color: #272753;
  }
`;
const StyledRightDirectedEdgeBtn = styled.svg<{ $selected: boolean }>`
  color: ${Theme.fgColor};
  background-color: ${(props) => (props.$selected ? "#272753" : Theme.bgColor)};
  box-sizing: content-box;
  padding: 5px;
  border: 1px solid ${Theme.nodeBorderColor};
  border-radius: 5px;
  &:hover {
    background-color: #272753;
  }
`;

function WeightInput(props: any) {
  const isPathSelected =
    props.path[props.selectedComponentID]?.componentType === "path"
      ? true
      : false;
  return (
    <>
      {props.weightOption === "Weighted" && (
        <TextField
          value={
            isPathSelected ? props.path[props.selectedComponentID].weight : ""
          }
          label={isPathSelected ? "Enter Weight" : "Select an Edge"}
          disabled={isPathSelected ? false : true}
          size="small"
          onChange={(e) => {
            const weight = parseInt(e.target.value);
            props.updateWeight(props.selectedComponentID, weight);
          }}
        />
      )}
    </>
  );
}

function Editor(props: any) {
  const [numberSystem, setNumberSystem] = useState("Alphabetical");

  const handleAddNode = () => {
    console.log(props.nodeLabel)
    const input = convert(numberSystem, props.nodeLabel[numberSystem]);
    props.addNode(crypto.randomUUID(), input, { x: 0, y: 0 });
    props.incrementLabel(numberSystem);
  };

  return (
    <List sx={{ backgroundColor: "white"}}>
      <Stack spacing={2} p={1.5}>
        <Typography variant="h6">Graph Type</Typography>
        <TextField
          select
          label={"Directed"}
          fullWidth={true}
          value={props.directedOption}
          size="small"
          onChange={(e: any) => {
            props.setDirectedOption(e.target.value);
          }}
        >
          <MenuItem value="Undirected">Undirected</MenuItem>
          <MenuItem value="Directed">Directed</MenuItem>
        </TextField>
        <TextField
          select
          label={"Weighted"}
          fullWidth={true}
          value={props.weightOption}
          size="small"
          onChange={(e: any) => {
            props.setWeightOption(e.target.value);
          }}
        >
          <MenuItem value="Non Weighted">Non Weighted</MenuItem>
          <MenuItem value="Weighted">Weighted</MenuItem>
        </TextField>
      </Stack>
      <Divider />
      <Stack spacing={1.5} p={1.5}>
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <IconButton
            onClick={() => props.setInstantNodeCreationMode(!props.instantNodeCreationMode)}
            size="small"
            sx={{p: 0, m: 0}}
          >
            <RadioButtonCheckedIcon
              fontSize="large"
              // @ts-ignore
              color={props.instantNodeCreationMode ? "primary" : ""}
            />
          </IconButton>
          <Typography>Node Label</Typography>
        </Stack>
        <Stack direction={"row"} spacing={1} pb={.5}>
          <TextField
            label={"Node Label"}
            value={convert(numberSystem, props.nodeLabel[numberSystem])}
            variant="outlined"
            type={"text"}
            fullWidth={true}
            size="small"
            disabled={numberSystem === 'Custom' ? false : true}
            onChange={(e) => {
              props.updateCustomNodeLabel(e.target.value)
            }}
          />
          <Button onClick={handleAddNode} variant="contained">
            Add
          </Button>
        </Stack>
        <TextField
          select
          label={"Naming Convention"}
          fullWidth={true}
          value={numberSystem}
          size="small"
          onChange={(e: any) => {
            setNumberSystem(e.target.value);
          }}
        >
          <MenuItem value="Alphabetical">Alphabetical</MenuItem>
          <MenuItem value="Numerical">Numerical</MenuItem>
          <MenuItem value="Roman Numeral">Roman Numeral</MenuItem>
          <MenuItem value="Custom">Custom</MenuItem>
        </TextField>
      </Stack>
      <Divider />
      {(props.directedOption === "Directed" ||
        props.weightOption === "Weighted") && (
        <Stack spacing={1} p={1.5}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography>Link Type</Typography>
            {props.directedOption === "Directed" &&
              props.path[props.selectedComponentID]?.componentType ===
                "path" && (
                <div style={{ display: "flex", gap: "7px" }}>
                  <StyledLeftDirectedEdgeBtn
                    $selected={
                      props.path[props.selectedComponentID]?.direction ===
                      "Forward"
                        ? true
                        : false
                    }
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => {
                      props.changeDirection(
                        props.selectedComponentID,
                        "Forward"
                      );
                    }}
                  >
                    <path
                      d="M14.2501 8.00001C14.2501 8.19892 14.1711 8.38968 14.0304 8.53033C13.8898 8.67099 13.699 8.75001 13.5001 8.75001H4.3126L7.5326 11.9694C7.6735 12.1103 7.75265 12.3014 7.75265 12.5006C7.75265 12.6999 7.6735 12.891 7.5326 13.0319C7.39171 13.1728 7.20061 13.2519 7.00135 13.2519C6.8021 13.2519 6.611 13.1728 6.4701 13.0319L1.9701 8.53188C1.90018 8.4622 1.84471 8.37941 1.80685 8.28824C1.769 8.19708 1.74951 8.09934 1.74951 8.00063C1.74951 7.90192 1.769 7.80418 1.80685 7.71302C1.84471 7.62185 1.90018 7.53906 1.9701 7.46938L6.4701 2.96938C6.53987 2.89961 6.62269 2.84427 6.71384 2.80652C6.80499 2.76876 6.90269 2.74933 7.00135 2.74933C7.10002 2.74933 7.19771 2.76876 7.28886 2.80652C7.38002 2.84427 7.46284 2.89961 7.5326 2.96938C7.60237 3.03914 7.65771 3.12197 7.69546 3.21312C7.73322 3.30427 7.75265 3.40197 7.75265 3.50063C7.75265 3.59929 7.73322 3.69699 7.69546 3.78814C7.65771 3.87929 7.60237 3.96212 7.5326 4.03188L4.3126 7.25001H13.5001C13.699 7.25001 13.8898 7.32902 14.0304 7.46967C14.1711 7.61033 14.2501 7.80109 14.2501 8.00001Z"
                      fill="#6A6A9F"
                    />
                  </StyledLeftDirectedEdgeBtn>
                  <StyledRightDirectedEdgeBtn
                    $selected={
                      props.path[props.selectedComponentID]?.direction ===
                      "Backward"
                        ? true
                        : false
                    }
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => {
                      props.changeDirection(
                        props.selectedComponentID,
                        "Backward"
                      );
                    }}
                  >
                    <path
                      d="M14.0306 8.53061L9.53063 13.0306C9.38973 13.1715 9.19863 13.2507 8.99938 13.2507C8.80012 13.2507 8.60902 13.1715 8.46813 13.0306C8.32723 12.8897 8.24807 12.6986 8.24807 12.4994C8.24807 12.3001 8.32723 12.109 8.46813 11.9681L11.6875 8.74999H2.5C2.30109 8.74999 2.11032 8.67097 1.96967 8.53032C1.82902 8.38967 1.75 8.1989 1.75 7.99999C1.75 7.80108 1.82902 7.61031 1.96967 7.46966C2.11032 7.329 2.30109 7.24999 2.5 7.24999H11.6875L8.46937 4.02999C8.32848 3.88909 8.24932 3.69799 8.24932 3.49874C8.24932 3.29948 8.32848 3.10838 8.46937 2.96749C8.61027 2.82659 8.80137 2.74744 9.00062 2.74744C9.19988 2.74744 9.39098 2.82659 9.53187 2.96749L14.0319 7.46749C14.1018 7.53726 14.1573 7.62016 14.1951 7.71142C14.2329 7.80269 14.2523 7.90052 14.2522 7.99931C14.252 8.09809 14.2324 8.19588 14.1944 8.28706C14.1564 8.37824 14.1007 8.46101 14.0306 8.53061Z"
                      fill="#6A6A9F"
                    />
                  </StyledRightDirectedEdgeBtn>
                </div>
              )}
          </div>

          <WeightInput
            selectedComponentID={props.selectedComponentID}
            path={props.path}
            weightOption={props.weightOption}
            updateWeight={props.updateWeight}
          />
        </Stack>
      )}
    </List>
  );
}

const mapStateToProps = (state: any) => {
  return {
    weightOption: state.globalFlags.weightOption,
    directedOption: state.globalFlags.directedOption,
    selectedComponentID: state.globalFlags.selectedComponentID,
    path: state.path.pathData,
    instantNodeCreationMode: state.globalFlags.instantNodeCreationMode,
    nodeLabel: state.nodeLabel
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addNode: (
      nodeID: string,
      label: string,
      coord: { x: number; y: number }
    ) => {
      dispatch(addNode(nodeID, label, coord));
    },
    setWeightOption: (weightOption: string) => {
      dispatch(setWeightOption(weightOption));
    },
    setDirectedOption: (directedOption: string) => {
      dispatch(setDirectedOption(directedOption));
    },
    updateWeight: (pathID: string, weight: number) => {
      dispatch(updateWeight(pathID, weight));
    },
    changeDirection: (pathID: string, direction: string) => {
      dispatch(changeDirection(pathID, direction));
    },
    setInstantNodeCreationMode: (instantNodeCreationMode: boolean) => {
      dispatch(setInstantNodeCreationMode(instantNodeCreationMode))
    },
    incrementLabel: (numberSystem: string) => {
      dispatch(incrementLabel(numberSystem))
    },
    updateCustomNodeLabel: (label: string)=> {
      dispatch(updateCustomNodeLabel(label))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
