import { SET_IS_CREATING_PATH, 
         UPDATE_PSEUDO_PATH_START_COORDS,
         SET_SELECTED_COMPONENT,
         SET_WEIGHT_OPTION,
         SET_DIRECTED_OPTION,
         SET_INSTANT_NODE_CREATION_MODE,
         UPDATE_ACTIVE_NUMBER_SYSTEM
       } from "./globalFlagActions";

export const setIsCreatingPath = (isCreatingPath: boolean)=> {
  return {
    type: SET_IS_CREATING_PATH,
    payload: isCreatingPath
  }
}

export const updatePseudoPathStartCoords = (coords: {x: number, y: number})=> {
  return {
    type: UPDATE_PSEUDO_PATH_START_COORDS,
    payload: coords
  }
}

export const setSelectedComponent = (selectedComponentID: string)=> {
  return {
    type: SET_SELECTED_COMPONENT,
    payload: selectedComponentID
  }
}

export const setWeightOption = (weightOption: string)=> {
  return {
    type: SET_WEIGHT_OPTION,
    payload: weightOption
  }
}

export const setDirectedOption = (directedOption: string)=> {
  return {
    type: SET_DIRECTED_OPTION,
    payload: directedOption
  }
}

export const setInstantNodeCreationMode = (instantNodeCreationMode: boolean)=> {
  return {
    type: SET_INSTANT_NODE_CREATION_MODE,
    payload: instantNodeCreationMode
  }
}

export const updateActiveNumberSystem = (numberSystem: string) => {
  return {
    type: UPDATE_ACTIVE_NUMBER_SYSTEM,
    payload: numberSystem
  }
}