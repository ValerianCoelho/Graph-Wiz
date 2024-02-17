import DashedLine from "../../../../Graph Components/DashedLine/DashedLine";

// If things break then change DashedLine to Path
function DisplayAnchorHandles({anchor, selectedComponentID, node, path}: any) {
  const A1Exists = anchor[selectedComponentID].a1.ax1;
  const A2Exists = anchor[selectedComponentID].a2.ax2;

  const N1 = {
    x:
      node[path[selectedComponentID].fromNodeID].coord.x + 15,
    y:
      node[path[selectedComponentID].fromNodeID].coord.y + 15,
  };
  const N2 = {
    x: node[path[selectedComponentID].toNodeID].coord.x + 15,
    y: node[path[selectedComponentID].toNodeID].coord.y + 15,
  };
  const A1 = {
    x: anchor[selectedComponentID].a1.ax1 + 7.5,
    y: anchor[selectedComponentID].a1.ay1 + 7.5,
  };
  const A2 = {
    x: anchor[selectedComponentID].a2.ax2 + 7.5,
    y: anchor[selectedComponentID].a2.ay2 + 7.5,
  };
  return (
    <>
      {A1Exists && <DashedLine x1={N1.x} y1={N1.y} x2={A1.x} y2={A1.y} />}
      {A1Exists && (
        <DashedLine
          x1={A1.x}
          y1={A1.y}
          x2={A2Exists ? A2.x : N2.x}
          y2={A2Exists ? A2.y : N2.y}
        />
      )}
      {A2Exists && <DashedLine x1={A2.x} y1={A2.y} x2={N2.x} y2={N2.y} />}
    </>
  );
}

export default DisplayAnchorHandles;
