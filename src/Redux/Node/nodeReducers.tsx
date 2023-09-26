import { UPDATE_NODE_COORD } from "./nodeActions";
import { nodeState, nodeAction } from "../../Types/Redux/node";

const initialNodeState = {
  coord: [0, 0]
}

const nodeReducer = (state: nodeState = initialNodeState, action: nodeAction)=> {
  switch(action.type) {
    case UPDATE_NODE_COORD:
      return {
        ...state,
        coord: action.payload,
      };
    default: return state;
  }
}

export default nodeReducer;