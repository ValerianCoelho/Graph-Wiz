import { UPDATE_NODE_COORD, ADD_NODE } from "./nodeActions";
// import { nodeState, nodeAction } from "../../Types/Redux/node";

const initialNodeState = {
  nodeData: {
    // node objects
  }
}

const nodeReducer = (state: any = initialNodeState, action: any)=> {
  switch(action.type) {
    case UPDATE_NODE_COORD:
      return {
        ...state,
        nodeData: {
          ...state.nodeData,
          [action.payload.nodeID]: {
            ...state.nodeData[action.payload.nodeID], 
            coord: action.payload.coord
          }
        }
      };
    case ADD_NODE:
      return {
        ...state,
        nodeData: {
          ...state.nodeData,
          [action.payload.nodeID]: action.payload.nodeData
        }
      }
    default: return state;
  }
}

export default nodeReducer;