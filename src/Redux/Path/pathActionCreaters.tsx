import { ADD_PATH } from "./pathActions";

export const addPath = (pathID: string, fromNodeID: string, toNodeID: string)=> {
  return {
    type: ADD_PATH,
    payload: {
      pathID: pathID,
      fromNodeID: fromNodeID,
      toNodeID: toNodeID
    }
  }
}