import { UPDATE_SCALE } from "./panzoomActions";
import { UPDATE_PAN } from "./panzoomActions";

export const updateScale = (scale: number)=> {
  return {
    type: UPDATE_SCALE,
    payload: scale
  }
}

export const updatePan = (pan: object)=> {
  return {
    type: UPDATE_PAN,
    payload: pan
  }
}