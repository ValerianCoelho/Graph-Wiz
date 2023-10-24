import { TOGGLE_CREATING_PATH, UPDATE_PSEUDO_PATH_START_COORDS } from "./globalFlagActions";

const initialGlobalFlagState = {
  creatingPath: false,
  pseudoPathStartCoords: {
    x: 0,
    y: 0
  }
}

const globalFlagReducer = (state: any = initialGlobalFlagState, action: any)=> {
  
  switch(action.type) {
    case TOGGLE_CREATING_PATH:
      // console.log(action.payload);
      return {
        ...state,
        creatingPath: !action.payload
      }
    case UPDATE_PSEUDO_PATH_START_COORDS:
      console.log(state)
      return {
        ...state,
        pseudoPathStartCoords: action.payload
      }
    default: return state;
  }
}

export default globalFlagReducer;