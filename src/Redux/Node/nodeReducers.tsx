import { UPDATE_NODE_COORD, ADD_NODE, DELETE_NODE } from "./nodeActions";
// import { nodeState, nodeAction } from "../../Types/Redux/node";

const initialNodeState = {
  data: {
    // node objects
  }
}

const nodeReducer = (state: any = initialNodeState, action: any)=> {
  switch(action.type) {
    case UPDATE_NODE_COORD: {
      const {nodeID, coord} = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          [nodeID]: {
            ...state.data[nodeID], 
            coord: coord
          }
        }
      };
    }
    case ADD_NODE: {
      const {nodeID, label, coord} = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          [nodeID]: {
            label: label,
            coord: coord,
            componentType: 'node'
          }
        }
      }
    }
    case DELETE_NODE:
      const { [action.payload]: deletedNode, ...newNodeData} = state.data;
      return {
        ...state,
        data: newNodeData
      }
    default: return state;
  }
}

export default nodeReducer;