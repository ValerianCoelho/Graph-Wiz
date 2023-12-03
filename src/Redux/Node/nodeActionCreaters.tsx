import { UPDATE_NODE_COORD, ADD_NODE, DELETE_NODE } from "./nodeActions"

export const updateNodeCoord = (nodeID: string, coord: {x: number, y: number})=> {
  return {
    type: UPDATE_NODE_COORD,
    payload: {
      nodeID: nodeID,
      coord: coord
    }
  }
}

export const addNode = (nodeID: string, label: string, coord: {x: number, y: number})=> {
  return {
    type: ADD_NODE,
    payload: {
      nodeID: nodeID,
      label: label,
      coord: coord
    }
  }
}

export const deleteNode = (nodeID: string)=> {
  return {
    type: DELETE_NODE,
    payload: nodeID
  }
}