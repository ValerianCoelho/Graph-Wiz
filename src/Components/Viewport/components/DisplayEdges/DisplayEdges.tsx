import Path from "../../../../Graph Components/Path/Path";

function DisplayEdges({ path, node, anchor }: any) {
  return (
    <>
      {Object.entries(path).map(([pathID, pathData]: [string, any]) => {
        if (node[pathData.toNodeID] == undefined) {
          return null;
        }
        const Node = {
          from: {
            x: node[pathData.fromNodeID].coord.x + 15, // size of node = 30, therefore offset = 30/2 = 15. change this later
            y: node[pathData.fromNodeID].coord.y + 15, // size of node = 30, therefore offset = 30/2 = 15. change this later
          },
          to: {
            x: node[pathData.toNodeID].coord.x + 15, // size of node = 30, therefore offset = 30/2 = 15. change this later
            y: node[pathData.toNodeID].coord.y + 15, // size of node = 30, therefore offset = 30/2 = 15. change this later
          },
        };
        const A1 = {
          x: anchor[pathID].a1.ax1,
          y: anchor[pathID].a1.ay1,
        };
        const A2 = {
          x: anchor[pathID].a2.ax2,
          y: anchor[pathID].a2.ay2,
        };
        return (
          <Path
            id={pathID}
            key={pathID}
            x1={Node.from.x}
            y1={Node.from.y}
            x2={Node.to.x}
            y2={Node.to.y}
            ax1={A1.x}
            ay1={A1.y}
            ax2={A2.x}
            ay2={A2.y}
            weight={pathData.weight}
            direction={pathData.direction}
          />
        );
      })}
    </>
  );
}

export default DisplayEdges;
