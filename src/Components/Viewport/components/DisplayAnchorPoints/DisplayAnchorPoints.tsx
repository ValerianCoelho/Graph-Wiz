import AnchorPoint from "../../../../Graph Components/AnchorPoint/AnchorPoint";

function DisplayAnchorPoints({ selectedComponentID, anchor }: any) {
  const A1Exists = anchor[selectedComponentID].a1.ax1;
  const A2Exists = anchor[selectedComponentID].a2.ax2;

  const A1 = {
    x: anchor[selectedComponentID].a1.ax1,
    y: anchor[selectedComponentID].a1.ay1,
  };
  const A2 = {
    x: anchor[selectedComponentID].a2.ax2,
    y: anchor[selectedComponentID].a2.ay2,
  };
  return (
    <>
      {A1Exists && (
        <AnchorPoint initialXPos={A1.x} initialYPos={A1.y} anchor="a1" />
      )}
      {A2Exists && (
        <AnchorPoint initialXPos={A2.x} initialYPos={A2.y} anchor="a2" />
      )}
    </>
  );
}

export default DisplayAnchorPoints;
