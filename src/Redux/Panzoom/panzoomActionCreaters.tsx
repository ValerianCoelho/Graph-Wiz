import { UPDATE_SCALE } from "./panzoomActions";

export const updateScale = (value: number)=> {
  return {
    type: UPDATE_SCALE,
    payload: value
  }
}