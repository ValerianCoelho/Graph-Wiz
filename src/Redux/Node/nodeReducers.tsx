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
    case UPDATE_NODE_COORD:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: {
            ...state.data[action.payload.id], 
            coord: action.payload.coord
          }
        }
      };
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