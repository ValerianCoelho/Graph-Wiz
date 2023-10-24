import { TOGGLE_CREATING_PATH, UPDATE_PSEUDO_PATH_START_COORDS } from "./globalFlagActions";

export const toggleCreatingPath = (creatingPath: boolean)=> {
  return {
    type: TOGGLE_CREATING_PATH,
    payload: creatingPath
  }
}

export const updatePseudoPathStartCoords = (coords: {x: number, y: number})=> {
  return {
    type: UPDATE_PSEUDO_PATH_START_COORDS,
    payload: coords
  }
}