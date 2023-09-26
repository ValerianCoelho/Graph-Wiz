import { UPDATE_SCALE } from "./panzoomActions";
import { panzoomState, panzoomAction } from "../../Types/Redux/panzoom";

const initialPanzoomState: panzoomState = {
  scale: 1
}

const panzoomReducer = (state: panzoomState = initialPanzoomState, action: panzoomAction)=> {
  switch(action.type) {
    case UPDATE_SCALE:
      return {
        ...state,
        scale: action.payload
      };
    default: return state;
  }
}

export default panzoomReducer;