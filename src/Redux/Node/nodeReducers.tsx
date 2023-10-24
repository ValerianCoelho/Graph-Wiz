import { UPDATE_NODE_COORD, ADD_NODE } from "./nodeActions";
// import { nodeState, nodeAction } from "../../Types/Redux/node";

const initialNodeState = {
  data: {
    // node objects
  }
}

const nodeReducer = (state: any = initialNodeState, action: any)=> {
  console.log(state);
  switch(action.type) {
    // case UPDATE_NODE_COORD:
    //   const updatedNode = {...state.data[action.payload.id], coord: action.payload.coord}
    //   const updatedData = [...state.data]
    //   updatedData[action.payload.id] = updatedNode;
    //   return {
    //     data: updatedData
    //   };
    case ADD_NODE:
      const { nodeID, ...newNodeData } = action.payload;
      console.log(nodeID);
      return {
        ...state,
        data: {
          ...state.data,
          [nodeID]: newNodeData
        }
      }
    default: return state;
  }
}

export default nodeReducer;