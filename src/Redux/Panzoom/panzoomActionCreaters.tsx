import { UPDATE_SCALE } from "./panzoomActions";

export const updateScale = (scale: number)=> {
  return {
    type: UPDATE_SCALE,
    payload: scale
  }
}