import { UPDATE_SCALE } from "./panzoomActions";
import { panzoomState, panzoomAction } from "../../Types/Redux/panzoom";

const initialState: panzoomState = {
  scale: 1
}

const panzoomReducer = (state: panzoomState = initialState, action: panzoomAction)=> {
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