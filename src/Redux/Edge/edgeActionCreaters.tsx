import { ADD_EDGE, UPDATE_EDGE_COORD } from "./edgeActions";

export const addEdge = (edgeID:string, fromNodeID: string, toNodeID:string, edgeFromCoord: {x: number, y: number}, edgeToCoord: {x: number, y: number})=> {
  return {
    type: ADD_EDGE,
    payload: {
      edgeID: edgeID,
      fromNodeID: fromNodeID,
      toNodeID: toNodeID,
      edgeFromCoord: edgeFromCoord,
      edgeToCoord: edgeToCoord
    }
  }
}

// export const updateEdgeCoord = (edgeID: string, edgeToCoord: {x: number, y: number}) => {

// }