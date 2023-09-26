import { UPDATE_NODE_COORD, ADD_NODE } from "./nodeActions"

export const updateNodeCoord = (coord: Array<number>)=> {
  return {
    type: UPDATE_NODE_COORD,
    payload: coord
  }
}

export const addNode = (data: object)=> {
  return {
    type: ADD_NODE,
    payload: data
  }
}