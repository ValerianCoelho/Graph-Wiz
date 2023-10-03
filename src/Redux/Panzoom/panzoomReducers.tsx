import { UPDATE_PAN, UPDATE_SCALE } from "./panzoomActions";
import { panzoomState, panzoomAction } from "../../Types/Redux/panzoom";

const initialPanzoomState: panzoomState = {
  scale: 1,
  pan: { x: 0, y: 0}
}

const panzoomReducer = (state: panzoomState = initialPanzoomState, action: panzoomAction)=> {
  switch(action.type) {
    case UPDATE_SCALE:
      return {
        ...state,
        scale: action.payload
      };
    case UPDATE_PAN:
      return {
        ...state,
        pan: action.payload
      }
    default: return state;
  }
}

export default panzoomReducer;