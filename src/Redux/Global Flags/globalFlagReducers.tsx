import { SET_SELECTED_COMPONENT, SET_IS_CREATING_PATH, UPDATE_PSEUDO_PATH_START_COORDS } from "./globalFlagActions";

const initialGlobalFlagState = {
  creatingPath: false,
  pseudoPathStartCoords: {
    x: 0,
    y: 0
  },
  selectedComponentID: 'undef'
}

const globalFlagReducer = (state: any = initialGlobalFlagState, action: any)=> {
  
  switch(action.type) {
    case SET_IS_CREATING_PATH:
      return {
        ...state,
        creatingPath: action.payload
      }
      case UPDATE_PSEUDO_PATH_START_COORDS:
        return {
          ...state,
          pseudoPathStartCoords: action.payload
        }
      case SET_SELECTED_COMPONENT:
      return {
        ...state,
        selectedComponentID: action.payload
      }
    default: return state;
  }
}

export default globalFlagReducer;