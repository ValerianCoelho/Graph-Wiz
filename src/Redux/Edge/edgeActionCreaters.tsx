import { ADD_EDGE } from "./edgeActions";

export const addEdge = (edgeID:string, fromNodeID: string, toNodeID:string, pathFromCoord: {x: number, y: number}, pathToCoord: {x: number, y: number})=> {
  return {
    type: ADD_EDGE,
    payload: {
      edgeID: edgeID,
      fromNodeID: fromNodeID,
      toNodeID: toNodeID,
      pathFromCoord: pathFromCoord,
      pathToCoord: pathToCoord
    }
  }
}
