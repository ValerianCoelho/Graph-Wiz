import { SET_SELECTED_COMPONENT, 
         SET_IS_CREATING_PATH, 
         UPDATE_PSEUDO_PATH_START_COORDS, 
         SET_WEIGHT_OPTION,
         SET_DIRECTED_OPTION,
         SET_INSTANT_NODE_CREATION_MODE,
         UPDATE_ACTIVE_NUMBER_SYSTEM
       } from "./globalFlagActions";

const initialGlobalFlagState = {
  weightOption: 'Non Weighted',
  directedOption: 'Undirected',
  isCreatingPath: false,
  selectedComponentID: null,
  instantNodeCreationMode: false,
  activeNumberSystem: 'Alphabetical',
  pseudoPathStartCoords: {
    x: 0,
    y: 0
  },
}

const globalFlagReducer = (state: any = initialGlobalFlagState, action: any)=> {
  switch(action.type) {
    case SET_IS_CREATING_PATH:
      return {
        ...state,
        isCreatingPath: action.payload
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
    case SET_WEIGHT_OPTION:
      return {
        ...state,
        weightOption: action.payload
      }
    case SET_DIRECTED_OPTION:
      return {
        ...state,
        directedOption: action.payload
      }
    case SET_INSTANT_NODE_CREATION_MODE:
      return {
        ...state,
        instantNodeCreationMode: action.payload
      }
    case UPDATE_ACTIVE_NUMBER_SYSTEM:
      return {
        ...state,
        activeNumberSystem: action.payload,
      }
    default: return state;
  }
}

export default globalFlagReducer;