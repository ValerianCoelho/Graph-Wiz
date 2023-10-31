import { UPDATE_NODE_COORD, ADD_NODE, DELETE_NODE } from "./nodeActions"

export const updateNodeCoord = (nodeID: string, coord: Array<number>)=> {
  return {
    type: UPDATE_NODE_COORD,
    payload: {
      nodeID: nodeID,
      coord: coord
    }
  }
}

export const addNode = (nodeID: string, data: object)=> {
  return {
    type: ADD_NODE,
    payload: {
      nodeID: nodeID,
      data: data
    }
  }
}

export const deleteNode = (nodeID: string)=> {
  return {
    type: DELETE_NODE,
    payload: nodeID
  }
}