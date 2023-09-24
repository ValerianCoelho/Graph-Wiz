import { UPDATE_SCALE } from "./panzoomActions";
import { panzoomState, panzoomAction } from "../../Types/Redux/panzoom";

const initialState: panzoomState = {
  scale: 1
}

const panzoomReducer = (state: panzoomState = initialState, action: panzoomAction)=> {
  switch(action.type) {
    case UPDATE_SCALE:
      // console.log(action.payload);
      return {
        ...state,
        scale: action.payload
      };
    default: return state;
  }
}

export default panzoomReducer;