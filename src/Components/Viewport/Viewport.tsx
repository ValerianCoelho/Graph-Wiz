import Panzoom from "@panzoom/panzoom";
import styled from "styled-components";
import { connect } from "react-redux";
import { useState, useEffect, useRef } from "react";

import Theme from "../../Theme.tsx";

import { setIsCreatingPath, updateScale } from "../../Redux/index.tsx";
import { updatePan } from "../../Redux/Panzoom/panzoomActionCreaters.tsx";
import { addPath } from "../../Redux/index.tsx";
import { deletePath } from "../../Redux/index.tsx";
import { deleteNode } from "../../Redux/index.tsx";
import { setSelectedComponent } from "../../Redux/index.tsx";
import { addAnchor } from "../../Redux/index.tsx";

import Node from "../../Graph Components/Node/Node.tsx";
import DisplayAnchorHandles from "./components/DisplayAnchorHandles/DisplayAnchorHandles.tsx";
import PseudoPath from "../../Graph Components/Pseudo Path/PseudoPath.tsx";
import DisplayAnchorPoints from "./components/DisplayAnchorPoints/DisplayAnchorPoints.tsx";
import DisplayEdges from "./components/DisplayEdges/DisplayEdges.tsx";
import NavigationButton from "../../Widget Components/Navigation Button/NavigationButton.tsx";
import GraphPattern from "./components/GraphPattern/GraphPattern.tsx";

const StyledViewportWrapper = styled.div`
  background-color: ${Theme.viewportColor};
  position: relative;
`;



function Viewport(props: any) {
  const [ax1, setAx1] = useState<number | null>(null);
  const [ay1, setAy1] = useState<number | null>(null);
  const [ax2, setAx2] = useState<number | null>(null);
  const [ay2, setAy2] = useState<number | null>(null);

  const [x2, setX2] = useState(0); // used for pseudo path's end coords
  const [y2, setY2] = useState(0); // used for pseudo path's end coords

  const [fromNodeID, setFromNodeID] = useState(null);
  const [isAddEdgeBtnClicked, setIsAddBtnClicked] = useState(false);

  const viewport = useRef<HTMLDivElement>(null);
  const nodesWrapper = useRef<HTMLDivElement>(null);

  

  useEffect(() => {
    const handleKeydown = (event: any) => {
      if (event.key.toLowerCase() === "a" && props.isCreatingPath) {
        if (!ax1 && !ay1) {
          setAx1(x2);
          setAy1(y2);
          return;
        }
        if (!ax2 && !ay2) {
          setAx2(x2);
          setAy2(y2);
        }
      }
    };
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [x2, y2]); // Include dependencies that are used in the effect

  useEffect(() => {
    const handleKeydown = (event: any) => {
      if (event.key === "Tab") {
        event.preventDefault();
        setIsAddBtnClicked(!isAddEdgeBtnClicked);
      }
    };
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [isAddEdgeBtnClicked]);

  useEffect(() => {
    const handleKeydown = (event: any) => {
      if (event.ctrlKey) {
        event.preventDefault();
        if (event.key.toLowerCase() === "d") {
          props.setSelectedComponent(null);
        }
      }
    };
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.keyCode === 46) {
        if (props.path[props.selectedComponentID]?.componentType === "path") {
          props.deletePath(props.selectedComponentID);
        } else if (
          props.node[props.selectedComponentID]?.componentType === "node"
        ) {
          for (let key in props.path) {
            if (
              props.path[key]["fromNodeID"] == props.selectedComponentID ||
              props.path[key]["toNodeID"] == props.selectedComponentID
            ) {
              props.deletePath(key);
            }
          }
          props.deleteNode(props.selectedComponentID);
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  useEffect(() => {
    const handlePointerUp = (e: any) => {
      if (props.isCreatingPath) {
        if (nodesWrapper.current?.contains(e.target)) {
          const toNodeID =
            e.target.getAttribute("data-node-id") ||
            e.target.children[0].getAttribute("data-node-id") ||
            e.target.children[0].children[0].getAttribute("data-node-id");
          if (fromNodeID != toNodeID || (ax2 && ay2)) {
            // prevent self loops for now
            const pathID = crypto.randomUUID();
            const weight = 1;
            const direction = "Forward";
            props.addPath(pathID, fromNodeID, toNodeID, weight, direction);
            props.addAnchor(pathID, { ax1, ay1 }, { ax2, ay2 });
          }
        }
        props.setIsCreatingPath(false);
        setAx1(null);
        setAy1(null);
        setAx2(null);
        setAy2(null);
      }
    };
    viewport.current?.parentElement?.addEventListener(
      "pointerup",
      handlePointerUp
    );

    return () => {
      viewport.current?.parentElement?.removeEventListener(
        "pointerup",
        handlePointerUp
      );
    };
  }, [props.isCreatingPath, ax1, ay1, ax2, ay2]);

  useEffect(() => {
    viewport.current?.parentElement?.addEventListener("pointermove", (e) => {
      const defaultCoords = { left: 0, top: 0 };
      // parent is static graph viewport
      const { left: parentLeft, top: parentTop } =
        viewport.current?.parentElement?.getBoundingClientRect() ||
        defaultCoords;

      // child is the graph viewport that pans
      let { left: childLeft, top: childTop } =
        viewport.current?.getBoundingClientRect() || defaultCoords;

      // update child coords wrt. parent as origin, not window
      childLeft -= parentLeft;
      childTop -= parentTop;

      // these are coordinates from the perspective of the graph viewport, not browser window
      const mouseLeftInParentCoords = e.clientX - parentLeft;
      const mouseTopInParentCoords = e.clientY - parentTop;

      setX2((mouseLeftInParentCoords - childLeft) / props.scale);
      setY2((mouseTopInParentCoords - childTop) / props.scale);
    });
  }, [props.scale]);

  useEffect(() => {
    if (viewport.current) {
      const panzoom = Panzoom(viewport.current, {
        canvas: true,
        excludeClass: "excluded-class",
        cursor: "default",
        noBind: true,
      });

      const parent = viewport.current.parentElement;
      let isPointerDown = false;

      parent?.addEventListener("wheel", (event) => {
        if (event.ctrlKey) {
          panzoom.zoomWithWheel(event);
          props.updateScale(panzoom.getScale());
          props.updatePan(panzoom.getPan());
        }
      });

      parent?.addEventListener("pointerdown", (event) => {
        isPointerDown = true;
        panzoom.handleDown(event);
      });

      document.addEventListener("pointermove", (event) => {
        if (isPointerDown) {
          props.updatePan(panzoom.getPan());
          panzoom.handleMove(event);
        }
      });

      document.addEventListener("pointerup", (event) => {
        isPointerDown = false;
        panzoom.handleUp(event);
      });
    }
  }, []);

  return (
    <>
      <StyledViewportWrapper>
        <div
          onClick={() => {
            setIsAddBtnClicked(!isAddEdgeBtnClicked);
          }}
        >
          <NavigationButton
            color={isAddEdgeBtnClicked ? "#FFFFFF" : "#6A6A9F"}
          />
        </div>

        <GraphPattern scale={props.scale} pan={props.pan}/>

        <div className="viewport__body" ref={viewport}>
          <div className="nodes-wrapper" ref={nodesWrapper}>
            {Object.entries(props.node).map(
              ([nodeID, nodeData]: [string, any]) => {
                // console.log("NODE") // [Performance Bug]: why is this line printing multiple times when I hover over the viewport
                //                        [Reason]: this happens because the state updates everytime we dispatch an action regardless of that action belonging to the reducer
                //                                  that deals with nodes, now when the action is passed to the nodeReducer it will go to the default case and return the state
                return (
                  <Node
                    label={nodeData.label}
                    key={nodeID}
                    id={nodeID}
                    addEdge={isAddEdgeBtnClicked}
                    onPointerDown={setFromNodeID}
                  />
                );
              }
            )}
          </div>
          <div className="paths-wrapper">
            <DisplayEdges
              path={props.path}
              node={props.node}
              anchor={props.anchor}
            />
          </div>
          {props.isCreatingPath && (
            <PseudoPath
              x2={x2} // end coords of pseudo path
              y2={y2} // end coords of pseudo path
              ax1={ax1} // for quadratic bezier
              ay1={ay1} // for quadratic bezier
              ax2={ax2} // for cubic bezier
              ay2={ay2} // for cubic bezier
            />
          )}
          {props.path[props.selectedComponentID]?.componentType === "path" && (
            <div key={props.selectedComponentID}>
              <DisplayAnchorPoints
                selectedComponentID={props.selectedComponentID}
                anchor={props.anchor}
              />
              <DisplayAnchorHandles
                node={props.node}
                path={props.path}
                selectedComponentID={props.selectedComponentID}
                anchor={props.anchor}
              />
            </div>
          )}
        </div>
      </StyledViewportWrapper>
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    scale: state.panzoom.scale,
    node: state.node.data,
    isCreatingPath: state.globalFlags.isCreatingPath,
    path: state.path.pathData,
    pan: state.panzoom.pan,
    selectedComponentID: state.globalFlags.selectedComponentID,
    anchor: state.anchor.anchorData,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateScale: (scale: number) => {
      dispatch(updateScale(scale));
    },
    updatePan: (pan: { x: number; y: number }) => {
      dispatch(updatePan(pan));
    },
    setIsCreatingPath: (isCreatingPath: boolean) => {
      dispatch(setIsCreatingPath(isCreatingPath));
    },
    addPath: (
      pathID: string,
      fromNodeID: string,
      toNodeID: string,
      weight: number,
      direction: string
    ) => {
      dispatch(addPath(pathID, fromNodeID, toNodeID, weight, direction));
    },
    deletePath: (pathID: string) => {
      dispatch(deletePath(pathID));
    },
    deleteNode: (nodeID: string) => {
      dispatch(deleteNode(nodeID));
    },
    setSelectedComponent: (selectedComponentID: string) => {
      dispatch(setSelectedComponent(selectedComponentID));
    },
    addAnchor: (
      pathID: string,
      a1: { ax1: number; ay1: number },
      a2: { ax2: number; ay2: number }
    ) => {
      dispatch(addAnchor(pathID, a1, a2));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Viewport);
