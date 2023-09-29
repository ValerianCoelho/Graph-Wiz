import { UPDATE_NODE_COORD, ADD_NODE } from "./nodeActions";
import { nodeState, nodeAction } from "../../Types/Redux/node";

const initialNodeState = {
  data: [
    // node objects
  ]
}

const nodeReducer = (state: any = initialNodeState, action: any)=> {
  console.log('Hello', state.data);
  switch(action.type) {
    case UPDATE_NODE_COORD:
      const updatedNode = {...state.data[action.payload.id], coord: action.payload.coord}
      const updatedData = [...state.data]
      updatedData[action.payload.id] = updatedNode;
      return {
        data: updatedData
      };
    case ADD_NODE:
      return {
        ...state,
        data: [...state.data, action.payload]
      }
    default: return state;
  }
}

export default nodeReducer;