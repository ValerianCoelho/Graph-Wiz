import { UPDATE_NODE_COORD } from "./nodeActions"

export const updateNodeCoord = (coord: Array<number>)=> {
  return {
    type: UPDATE_NODE_COORD,
    payload: coord
  }
}