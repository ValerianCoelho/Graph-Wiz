import { UPDATE_NODE_COORD, ADD_NODE } from "./nodeActions";
import { nodeState, nodeAction } from "../../Types/Redux/node";

const initialNodeState = {
  data: [
    // node objects
  ]
}

const nodeReducer = (state: any = initialNodeState, action: nodeAction)=> {
  console.log(state);
  switch(action.type) {
    // case UPDATE_NODE_COORD:
    //   return {
    //     ...state,
    //     coord: action.payload,
    //   };
    case ADD_NODE:
      return {
        ...state,
        data: [...state.data, action.payload]
      }
    default: return state;
  }
}

export default nodeReducer;