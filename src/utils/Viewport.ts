export const handleDeleteComponent = (props: any) => {
  if (props.path[props.selectedComponentID]?.componentType === "path") {
    props.deletePath(props.selectedComponentID);
  } else if (props.node[props.selectedComponentID]?.componentType === "node") {
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
};
