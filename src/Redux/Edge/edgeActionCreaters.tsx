import { ADD_EDGE } from "./edgeActions";

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
